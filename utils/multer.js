const multer = require('multer')
const path = require('path')

const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if ( ext !== '.jpeg' && ext !== '.jpg' && ext !== 'png' ) {
            cb(new Error('File type is not supported'), false)
        } else {
            cb(null ,true)
        }
    }
})

module.exports = upload
