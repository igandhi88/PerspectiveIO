const express = require('express');
const router = express.Router(),
    Controller=require('./controller'),
    UserSchema=require('./schema/fields');

router.get('/user-schema',(req,res,next)=>{
    res.json(UserSchema)
})

router.post("/register",Controller.insertUser)
router.post("/login",Controller.userAuthentication)

router.get("/get-all_users",Controller.getAllUsers)
router.post("/remove-user",Controller.removeUser)


module.exports=router