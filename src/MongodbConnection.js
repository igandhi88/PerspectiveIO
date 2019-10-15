const mongoose = require('mongoose');

var mongoDBConnectionString=function mongoDbConnection(host,port,dbname,successCallBack,failCallBack) {

    // const option = {
    //     socketTimeoutMS: 30000,
    //     keepAlive: true,
    //     reconnectTries: 30000
    // };
    
    // MongoDB Connection 
    mongoose.connect(`mongodb://${host}:${port}/${dbname}`)

    const db = mongoose.connection;

    db.on('error', err => {
        console.error(`Error while connecting to DB: ${err.message}`);
        if(failCallBack)
            failCallBack(err.message)
    });
    db.on('connected', () => {
        console.log('DB connected successfully!');
        if(successCallBack)
            successCallBack('DB connected successfully!')
    });

}

module.exports=mongoDBConnectionString

