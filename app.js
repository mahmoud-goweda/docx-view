
  'use strict';


  require("dotenv").config();
  // function requireHTTPS(req, res, next) {
  //   // The 'x-forwarded-proto' check is for Heroku
  //   if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
  //       return res.redirect('https://' + req.get('host') + req.url);
  //   }
  //   next();
  // }
  const express = require('express');
  const bodyParser = require('body-parser');
  const Routes = require('./src/entery_point/routes/index');
  const Database = require('./src/data_provider/database');
  const app = express();
  const cors = require("cors");
  const fs = require('fs')
  const path = require('path');
-



  app.use(cors());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  // new Database(process.env.DATABASE_URL)

  // const rout = express.Router();

  app.use('/', Routes());


  app.listen(process.env.PORT || 3500,()=>{
    console.log('app is running')
  });
