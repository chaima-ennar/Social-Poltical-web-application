var mongoose =  require ('mongoose');
module.exports = mongoose.model('depute',{
  namedepute: String,
  descriptiondepute: String,
    date:{type :Date,default:Date.now}


}

);
