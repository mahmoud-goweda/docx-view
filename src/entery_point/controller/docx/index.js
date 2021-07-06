const uploadDocx = require('./upload_docx.controller');
const removeDocx = require('./remove_files.controller');





module.exports =  (repository)=> {

    const upload_success = uploadDocx().DocxuploadSuccess;
    const upload_error = uploadDocx().DocxuploadError;
    const remove_docx = removeDocx(repository).deleteFiles;


       return{
        upload_success,
        upload_error,
        remove_docx
       }

}
