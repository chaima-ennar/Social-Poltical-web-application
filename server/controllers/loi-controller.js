var mongoose = require('mongoose');
var Loi= require('../datasets/lois');




       module.exports.removeLoi = function (req,res){
         var id=req.params.id;

         console.log("id a supprimer sever " +id);




        Loi.findById(id).remove(). exec(function(err , allComites){
            if (err){
              res.error(err)
            }else{
              res.json(allComites);
            }
          })}

          module.exports.editLoi = function (req,res){
                console.log(req.body.nameloi)
          Loi.findByIdAndUpdate(req.params.id, {
          $set: { nameloi: req.body.nameloi, descriptionloi: req.body.descriptionloi }}, {upsert:true}, function (err,allLois) {
            if (err){
              res.error(err)
            }else{res.json(allLois)}
          }
        );
      }

module.exports.addLoi = function (req , res ){
  var loi = new Loi(req.body);
loi.save();

  Loi.find({})
        .sort({date: -1}).exec(function(err, alllois){
        if (err){
            res.error(err);
        } else {
            res.json(alllois);
        }
    });
  };






module.exports.getLois = function(req, res){
  Loi.find({})


         .sort({date: -1})
         .exec(function(err , alllois){
           if (err){
             res.error(err)
           }else{
             res.json(alllois);
           }
         })

       }
