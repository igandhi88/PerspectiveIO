const  _ = require('lodash');

module.exports={
isInValidValue:(value)=>
{
   return !value || (_.isEmpty(value) && value.length==0)
},
getKeysValues:(array,key)=>{
   return _.map(array,key)
}
}