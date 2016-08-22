var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comite= require('../datasets/comites');

var express = require('express');
var app = express();
app.use(bodyParser.json);


module.exports.addComite = function (req , res ){
  var comite = new Comite(req.body);
  comite.save();

    Comite.find({})
        .sort({date: -1}).exec(function(err, allComments){
        if (err){
            res.error(err);
        } else {
            res.json(allComments);
        }
    });
  };






module.exports.getComites = function(req, res){
  Comite.find({})
.sort({date: -1})


         .exec(function(err , allComites){
           if (err){
             res.error(err)
           }else{
             res.json(allComites);
           }
         })

       }
      module.exports.vote= function(req ,cb){
        var id=req.body.params;
           var votes;
        Comite.findById(id)

         votes += 1;
        console.log(votes)





      }


       module.exports.editComite = function (req,res){
             console.log(req.body.namecomite)
         Comite.findByIdAndUpdate(req.params.id, {
       $set: { namecomite: req.body.namecomite, descriptioncomite: req.body.descriptioncomite }}, {upsert:true}, function (err,allComites) {
         if (err){
           res.error(err)
         }else{res.json(allComites)}
       }
     );
   }










       module.exports.removeComite = function (req,res){
         var id=req.params.id;

         console.log("id a supprimer sever " +id);




         Comite.findById(id).remove(). exec(function(err , allComites){
            if (err){
              res.error(err)
            }else{
              res.json(allComites);
            }
          })}
