var mongoose =  require ('mongoose');
module.exports = mongoose.model('comite',{
  namecomite: String,
  descriptioncomite: String,
  
  date:{type :Date,default:Date.now}

}

);
