var mongoose =  require ('mongoose');
module.exports = mongoose.model('commentl',{
  user : String,
  userId: String,
  userImage:String,
  content:String,
  date:{type :Date,default:Date.now}

})
