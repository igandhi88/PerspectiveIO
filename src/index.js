'use strict';
const express = require('express'),
    app = express(),
    mongoDBConnection=require('./MongodbConnection'),
    Version1=require('./v1');


mongoDBConnection("localhost","27017","PerspectiveIO")

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }

app.use(requestTime)


app.use('/v1',Version1)

module.exports =app; 

