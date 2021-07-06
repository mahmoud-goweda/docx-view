
module.exports = (repository) => {
    function execute(dist){

      return new Promise((resolve, reject) => {
       repository.deleteFiles(dist).then(res=>{
         console.log(res)
         resolve(res)
       }).catch(err=>{
         reject(err)

       })
     });
   }
   return {execute}
 }

