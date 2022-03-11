const multer = require("multer");
const path = require("path");



// Movies

const moviesStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    let folder = path.join(__dirname, "../public/images/movies");
    callback(null, folder);
  },
  filename: (req, file, callback) => {
      let image = Data.now() + path.extname(file.originalname);
      callback(null,image);
  },
});


/// Procesar y almacenar archivos
let upload = multer({storage:moviesStorage})

module.exports = upload;