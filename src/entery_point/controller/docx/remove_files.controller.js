const DeleteFiles = require( '../../../core/use_cases/Remove_Files')

module.exports = (repository) => {
    const deleteFiles= async(req,res)=>{
        const DeleteFilesCase = DeleteFiles(repository);
        // const locId= await req.params.path;
        // console.log(req.params)

        DeleteFilesCase.execute(`src/data_provider/uploads`).then(result=>{
          console.log(result)
          res.status(201).json(`removed`)

        }).catch(err=>{
          res.status(400).send(err)
        })
      }
      return {
        deleteFiles
      }
}
