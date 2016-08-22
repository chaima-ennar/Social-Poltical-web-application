
var mongoose = require('mongoose');
var Commentd= require('../datasets/commentsd');
module.exports.postCommentd = function( req, res){

  var commentd  = new Commentd(req.body);
  commentd.save();

  Commentd.find({})
      .sort({date: -1}).exec(function(err, allCommentsd){
      if (err){
          res.error(err);
      } else {
          res.json(allCommentsd);
      }
  });
};

module.exports.getCommentsd = function(req, res){
  Commentd.find({})
         .sort({date: -1})
         .exec(function(err , allCommentsd){
           if (err){
             res.error(err)
           }else{
             res.json(allCommentsd);
           }
         })
}
  // var comment = new Comment(req.body);
  // comment.save();
  // comment.find({}, function(err,allComments){
  //   if(err){
  //     res.error(error);
  //   } else {
  //     res.json(allComments);
  //   }
  // })
