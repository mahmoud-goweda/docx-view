const express = require('express');
// const siteRoute = require('./sites');
// const sectorRoute = require('./sectors');
// const secureRoute = require('./visits');
const docx = require('./view_docx.route');




// const route = express.Router();

// route.get('/',(req,res)=>{
//     res.json('welcome to vistors security serve')
// })

const Routes = (dependencies) => {


    const router = express.Router();



    router.use("/upload_docx", docx());
    router.use('/uploads', express.static('src/data_provider/uploads'));







    return router;
  }

// module.exports = rout;
module.exports = Routes;
