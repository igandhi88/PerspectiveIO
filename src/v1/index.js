const express = require('express'),
    app = express(),
    Authentication=require('./authentication')
    router = express.Router();

// router.get('/test',(req,res,next)=>{
//     let err=new Error("message1")
//     return next(err)
// })

// app.use(router)


app.use("/authentication",Authentication)

module.exports =app; 

