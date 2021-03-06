const express = require('express');
const docxUploadController = require('../controller/docx/index');
const docxUpload = require('../middleware/docx_multer');
const DocxRepository = require('../../data_provider/repositories/upload-docx')
const  rimraf = require("rimraf");
var fs = require('fs');


const DocxFileView = () => {
  //   const database = new userDatabase();
    const repository = new DocxRepository(fs);
    const controller = docxUploadController( repository );
    const router = express.Router();

    router.route('/')

      .post(docxUpload.single('view_docx'),controller.upload_error,controller.upload_success)

      router.route('/remove')

      .post((controller.remove_docx))

    return router;
  }

  module.exports = DocxFileView;
