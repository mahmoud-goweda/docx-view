


  module.exports = () => {
    const DocxuploadError = async(err,req, res,next) => {
      if (err.code == 'File too large') {
        return res.status(418).send(err.code);

    }
    next()

    }
    const DocxuploadSuccess = async(req,res ,next) => {

      if (req.fileValidationError) {
        return res.status(400).json('invalid format');
        // or return res.end();
        // or even res.render(); whatever response you want here.
   }
   try{
    //  console.log(req)
      await res.send(req.file)

   } catch(err){
     console.log(err,'failef')
    return res.status(418).send(err);

   }



        // next()
 }


  return {
    DocxuploadError,
    DocxuploadSuccess

  }
}
