const {User:UserSchema, SchemaField:UserSchemaFields}=require('../schema'),
    { Utils, HttpMsg,Response }=require('../../../commons'),
    MObjectId=require('mongoose').Types.ObjectId;

let insertUserFn=(req,res,next)=>{

    let { [UserSchemaFields.Mobile] : mobile,  [UserSchemaFields.Email] : email,  [UserSchemaFields.UserName] : userName} = req.body

    if(Utils.isInValidValue(mobile) || Utils.isInValidValue(email) || Utils.isInValidValue(userName))
        return next(new Error(HttpMsg.paramsMissingMsg))

    let userSchema=new UserSchema(req.body)

    userSchema.save((err,data)=>{
        if(err)
            return next(err)

        let response=new Response(true,200).setMessage(HttpMsg.recordedAdded).setResultData(data).build();
        res.status(200)
        res.send(response)
    })
}

let userAuthenticationFn=(req,res,next)=>{

   let { username } =req.body
   
   UserSchema.findOne({[UserSchemaFields.UserName]: username},(err,result)=>{
       if(err)
        return next(err)

    let response=new Response(true,200).setMessage(HttpMsg.recoredFound).setResultData(result).build();
    res.status(200),
    res.send(response)
   })

}

let getAllUsersFn=(req,res,next)=>{

    UserSchema.find().exec((err,result)=>{
        if(err)
            return next(err)

        let response=new Response(true,200).setMessage(HttpMsg.recoredFound).setResultData(result).build();
        res.status(200),
        res.send(response)
    })
}

let removeUserFn=(req,res,next)=>{
    let { userId } =req.body
    
    if(Utils.isInValidValue(userId))
        return next(new Error(HttpMsg.paramsMissingMsg))

    UserSchema.findByIdAndDelete(userId,(err,result)=>{
        if(err)
            return next(err)

            let response=new Response(true,200).setMessage(HttpMsg.recoredDeleted).build();
            res.status(200),
            res.send(response)
    })
}
module.exports={
    insertUser:insertUserFn,
    userAuthentication:userAuthenticationFn,
    getAllUsers:getAllUsersFn,
    removeUser:removeUserFn
}