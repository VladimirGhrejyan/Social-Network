const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const User = require('../models/User')

router.get('/userlist', authMiddleware, 
    async (req, res) => {
        try {
            const currentUser = await User.findById(req.user.id)
            const result = await User.find({})
    
            const users = result.filter( item => item.username !== currentUser.username )
    
            return res.json({users, message: 'Users was uploaded'})

        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Users upload error'})
        }
    } 
)

module.exports = router