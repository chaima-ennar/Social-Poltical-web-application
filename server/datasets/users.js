var mongoose = require('mongoose');
module.exports = mongoose.model('User',{
  email :String,
  username :String,
  password: String,
  image: String,
  adminmail: String,
  adminpassword :String,
  following:[{userId:String , username:String}]
});
