const config = require('config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Router = require('express')
const User = require('../models/User')
const authMiddleware = require('../middleware/auth.middleware')
const router = new Router()

router.post('/registration', 
    async (req, res) => {
    try {
        const {username, password, email} = req.body;

        const candidate = await User.findOne({username})
        
        if (candidate) {
            return res.status(400).json({message: `User with username ${username} already exist`})
        }

        const hashPassword = await bcrypt.hash(password, 7)

        const user = new User({username, email, password: hashPassword, avatar: ''})

        await user.save()

        return res.json({message: 'User was created'})

    } catch (e) {
        res.send({message: 'Server error'})
    }
})

router.post('/login',
    async (req, res) => {
        try {
            const {username, password} = req.body

            const user = await User.findOne({username})

            if (!user) {
                return res.status(400).json({message: `User not found`})
            }

            const isPasswordValid = bcrypt.compareSync(password, user.password)

            if (!isPasswordValid) {
                return res.status(400).json({message: 'Invalid password'})
            }

            const token = jwt.sign({id: user._id}, config.get('secretKey'), {expiresIn: '1h'})

            return res.json({
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    username: user.username,
                    avatar: user.avatar
                }
            })

        } catch (e) {
            res.send({message: 'Server error'})
        }
    }
)

router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user._id}, config.get('secretKey'), {expiresIn: '1h'})
            return res.json({
                token,
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    avatar: user.avatar
                }
            })

        } catch (e) {
            console.log(e)
            res.send({message: 'Server error'})
        }
    }
)

module.exports = router