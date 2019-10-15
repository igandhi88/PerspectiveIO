var express = require('express');
var app = express();
var route=express.Router()
const src = require('./src');
const cors = require('cors');
const Response = require('./src/commons/response'),
    bodyParser = require('body-parser')
    urlencodedParser = bodyParser.urlencoded({ extended: true }),
    jsonParser=bodyParser.json(),
    server = require('http').createServer(app),
    compression = require('compression');


app.use(route)
app.use(compression())
app.use(cors());
app.use(urlencodedParser)
app.use(jsonParser)


let errorHandler=(err,req,res,next)=>{
    console.log("Eroor:--",err)
    res.status(200)
    res.json(new Response(false, 108)
    .setMessage(err.message).build())   
}


app.use('/api', src);

app.use(errorHandler)

const port = process.env.port || 3033;

server.listen(port, () => {
    console.log(`Web server listening on: ${port}`);
  });