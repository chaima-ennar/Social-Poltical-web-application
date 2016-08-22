
var mongoose = require('mongoose');
var Commentl= require('../datasets/commentsl');
module.exports.postCommentl = function( req, res){

  var commentl  = new Commentl(req.body);
  commentl.save();

  Commentl.find({})
      .sort({date: -1}).exec(function(err, allComments){
      if (err){
          res.error(err);
      } else {
          res.json(allComments);
      }
  });
};

module.exports.getCommentsl = function(req, res){
  Commentl.find({})
         .sort({date: -1})
         .exec(function(err , allCommentsl){
           if (err){
             res.error(err)
           }else{
             res.json(allCommentsl);
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
