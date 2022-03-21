const cloudinary = require('cloudinary').v2
const config = require('config')

cloudinary.config({
    cloud_name: config.get('cloudinaryName'),
    api_key: config.get('cloudinaryKey'),
    api_secret: config.get('cloudinarySecret')
})

module.exports = cloudinary