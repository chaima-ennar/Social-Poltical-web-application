
var mongoose = require('mongoose');
var Comment= require('../datasets/comments');
module.exports.postComment = function( req, res){

  var comment  = new Comment(req.body);
  comment.save();

  Comment.find({})
      .sort({date: -1}).exec(function(err, allComments){
      if (err){
          res.error(err);
      } else {
          res.json(allComments);
      }
  });
};

module.exports.remove = function(req , res, name){

  Comment.find({ email: 'name' }, function(err, user) {
    if (err) throw err;

    // delete him
  Comment.remove(function(err) {
      if (err) throw err;

      console.log('comment successfully deleted!');
    });
  });



}

module.exports.getComments = function(req, res){
  Comment.find({})
         .sort({date: -1})
         .exec(function(err , allComments){
           if (err){
             res.error(err)
           }else{
             res.json(allComments);
           }
         })
}


module.exports.removeComment= function (req,res){
  var id=req.params.id;

  console.log("id a supprimer sever " +id);




  Comment.findById(id).remove(). exec(function(err , allComites){
     if (err){
       res.error(err)
     }else{
       res.json(allComites);
     }
   })}
  // var comment = new Comment(req.body);
  // comment.save();
  // comment.find({}, function(err,allComments){
  //   if(err){
  //     res.error(error);
  //   } else {
  //     res.json(allComments);
  //   }
  // })
