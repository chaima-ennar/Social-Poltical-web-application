var mongoose = require('mongoose');
var User= require('../datasets/users');
module.exports.signup = function (req , response ){
  var user = new User(req.body);
  user.save();
  console.log(req.body);
}
module.exports.login=function(req,res){
  User.find(req.body,function(err,results){
    console.log(req.body);
    if (err){
      console.log("error out");


    }//if there is a result and there is one result
    if(results && results.length===1){
      var userData=results[0];

      res.json({
                email :req.body.email,
                _id: userData._id,
                username:userData.username,
                image: userData.image});


    }

  });
}
