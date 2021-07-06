const multer = require('multer');
const path = require('path');
// const cloudinary = require('cloudinary')

const multerStorage = multer.diskStorage({
  // Destination to store image
  destination: 'src/data_provider/uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
           + path.extname(file.originalname))
          // file.fieldname is name of the field (image)
          // path.extname get the uploaded file extension
  }
});

const documentUpload = multer({
  storage: multerStorage,
  limits: {
    fileSize: 1000000 *20// 1000000 Bytes = 1 MB
  },

  fileFilter(req, file, cb) {

    if (!file.originalname.match(/\.(pdf|PDF|doc|DOC|docx|DOCX|xls|XLS|docm|csv|potx|ppa|pptx)$/)) {
       // upload only png and jpg format
       req.fileValidationError = "Forbidden extension";
       return cb(null, false, req.fileValidationError);
     }
   cb(null, true)
}
})

module.exports = documentUpload
