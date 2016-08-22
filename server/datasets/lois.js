var mongoose =  require ('mongoose');
module.exports = mongoose.model('loi',{
  nameloi: String,
  descriptionloi: String,
  loiId:String,
    date:{type :Date,default:Date.now}

}

);
