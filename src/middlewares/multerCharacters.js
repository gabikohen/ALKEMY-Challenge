const multer = require("multer");
const path = require("path");


// Characters
const charactersStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log(file);
    let folder = path.join(__dirname, "../public/images/characters");
    callback(null, folder);
  },
  filename: (req, file, callback) => {
    console.log(file);
    let image = Data.now() + path.extname(file.originalname);
    callback(null,image);
},
});

let fileUpload = multer({storage:charactersStorage})


module.exports = fileUpload;