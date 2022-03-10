const multer = require('multer');
const path = require('path');
const fs = require('fs');


const storage = multer.diskStorage({
    
        
        destination: function (req, file, cb) {
            fs.mkdirSync(path.join(__dirname,'../public/images'),{recursive:true});
            cb(null, path.join(__dirname, '../public/images/')) 
        },
        filename: function (req, file, cb) {
            const newFileName = '1' + path.extname(file.originalname)
            cb(null, newFileName)
        }
    })
    
    const upload = multer({ storage })
    
    module.exports = upload