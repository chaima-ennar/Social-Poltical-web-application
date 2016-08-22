var mongoose = require('mongoose');
var Depute= require('../datasets/deputes');


module.exports.removeDepute = function (req,res){
  var deputeId=req.body.deputeId;
  Depute.findOneAndRemove(deputeId,function(err , allDeputes){
    return res.send();
  });
}



module.exports.addDepute = function (req , res ){
  var depute = new Depute(req.body);
  depute.save();

    Depute.find({})
        .sort({date: -1}).exec(function(err, allDeputes){
        if (err){
            res.error(err);
        } else {
            res.json(allDeputes);
        }
    });
  };









         module.exports.removeDepute= function (req,res){
           var id=req.params.id;

           console.log("id a supprimer sever " +id);




           Depute.findById(id).remove(). exec(function(err , allDeputes){
              if (err){
                res.error(err)
              }else{
                res.json(allDeputes);
              }
            })}












module.exports.getDeputes = function(req, res){
  Depute.find({})
    //     if (err){
    //       console.log("error out");
     //
    //     }
    //     if(results ){
    //       var m=results.length;
    //       console.log(m);
    //  res.json({
    //     namecomite
    //     descriptioncomite
    //     com
    //  })

         .sort({date: -1})
         .exec(function(err , allDeputes){
           if (err){
             res.error(err)
           }else{
             res.json(allDeputes);
           }
         })

       }



       module.exports.editDepute = function (req,res){
             console.log(req.body.namedepute)
         Depute.findByIdAndUpdate(req.params.id, {
       $set: { namedepute: req.body.namedepute, descriptiondepute: req.body.descriptiondepute}}, {upsert:true}, function (err,allComites) {
         if (err){
           res.error(err)
         }else{res.json(allComites)}
       }
       );
       }
