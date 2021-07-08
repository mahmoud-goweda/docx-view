module.exports = class UploadDocxRepository {

  constructor(rep){
    this.rep = rep;
    // this.multerStorage = multerStorage;

  }




  deleteFiles(distination){
    return new Promise((resolve, reject) => {

      this.rep.unlink(distination, (res,err)=>{
        if(err){

          return  reject(err)
        }
        resolve('success');
       })
    });
  }


}
