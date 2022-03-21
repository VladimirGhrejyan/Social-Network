const Router = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const upload = require('../utils/multer')
const cloudinary = require('../utils/cloudinary')
const User = require('../models/User')
const router = new Router()

router.post('/upload', authMiddleware, upload.single('image'), 
    async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path)
 
            const user = await User.findById(req.user.id)
            user.avatar = result.secure_url
            user.cloudinary_id = result.public_id
            await user.save()

            return res.json({user, message: 'Avatar was uploaded'})

        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Avatar upload error'})
        }
    }
)

router.delete('/delete', authMiddleware,
    async (req, res) => {
        try {
            const user = await User.findById(req.user.id)
            await cloudinary.uploader.destroy(user.cloudinary_id)
            user.avatar = ''
            user.cloudinary_id = ''
            user.save()

            return res.json({user, message: 'Avatar was deleted'})

        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Avatar delete error'})
        }
    }
)

router.put('/change', authMiddleware, upload.single('image'), 
    async (req, res) => {
        try {
            const user = await User.findById(req.user.id)

            if (user.cloudinary_id) {
                await cloudinary.uploader.destroy(user.cloudinary_id)
            }

            const result = await cloudinary.uploader.upload(req.file.path)
            user.avatar = result.secure_url
            user.cloudinary_id = result.public_id
            await user.save()

            return res.json({user, message: 'Avatar was changed'})

        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Avatar change error'})
        }
    }
)

module.exports = router