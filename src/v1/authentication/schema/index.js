const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaField=require('./fields'),
        DBTable=require('../../../config/db_table');

const UserSchema = new Schema({
        [SchemaField.DOB] :  {type: String},
        [SchemaField.Name] :  {type: String},
        [SchemaField.Gender] :  {type: String},
        [SchemaField.ProfilePhoto] :  {type: String},
        [SchemaField.Mobile] :  {type: String, required: [true,"Mobile number required"] ,unique :true},
        [SchemaField.Email] :  {type: String,required: [true,"Email required"],unique:true },
        [SchemaField.EmailVerification] :  {type: Boolean,default:false},
        [SchemaField.CreatedAt] :  {type: Date, default:Date.now},
        [SchemaField.ReferralBy] :  {type: String},
        [SchemaField.UserName] :  {type: String},
        [SchemaField.IsBlock] :  {type: Boolean, default :false},
        [SchemaField.BlockBy] :  {type: Schema.Types.ObjectId},
        [SchemaField.IsActive] :  {type: Boolean,default:true},
        [SchemaField.LastLoginDate] :  {type: Date ,default :Date.now},
        [SchemaField.Address] :  {type: String},
        [SchemaField.City] :  {type: String},
        [SchemaField.Pincode] :  {type: String},
        [SchemaField.State] :  {type: String},
        [SchemaField.Country] :  {type: String},
        [SchemaField.DeviceToken] :  {type: String},
        [SchemaField.DeviceType] :  {type: String},
        [SchemaField.AuthenticationType] :  {type: String,default :'N'}
})
    
UserSchema.path(SchemaField.Email).validate(function (v) {
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(v); // Assuming email has a text attribute

}, "Invalid Email")



UserSchema.pre('save', function (next) {
  // this.answers.sort(sortAnswers);
  var user = this;
  User.count({$or:[{email:user.email},{mobile:user.mobile},{username:user.username}]},(err,result)=>{
    if(err)
      return next(err)

     if(result>0)
        return next(new Error("User Already exists"))

    // user[SchemaField.ReferralCode]='12345'
    next()
  })
 
});

UserSchema.post('save', function(error, doc, next) {
  
  // console.log("Error:--",error)
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error("User already register with us"));
  } else if(error.name === 'ValidationError' && error.errors){
    let keys = Object.keys(error.errors);
    next(error.errors[keys[0]]);
  }else{
    next(error);
  }
});

 //UserSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model(DBTable.USER, UserSchema);

module.exports = {User,SchemaField};  