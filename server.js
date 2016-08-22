
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddelware = multipart();



var app = express();
var authenicationController = require('/home/chaima/application/bardo/server/controllers/authentication-controller.js')
var profileController = require ('/home/chaima/application/bardo/server/controllers/profile-controller.js');
var commentcontroller = require('/home/chaima/application/bardo/server/controllers/comment-controller.js');
var comitecontroller = require('/home/chaima/application/bardo/server/controllers/comite-controller.js');
var userfController = require('/home/chaima/application/bardo/server/controllers/users-controller.js');
var loicontroller = require('/home/chaima/application/bardo/server/controllers/loi-controller.js');
var commentlcontroller = require('/home/chaima/application/bardo/server/controllers/commentl-controller.js');
var commentdcontroller = require('/home/chaima/application/bardo/server/controllers/commentd-controller.js');
var deputecontroller = require('/home/chaima/application/bardo/server/controllers/depute-controller.js');
mongoose.connect('mongodb://localhost:27017/bardo');
//connecting to the database "bardo"
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app'));
//serving the content of the "app" directory
app.use(express.static(__dirname + '/node_modules'));
//serving the content of the node_modules directory

app.use('/uploads',express.static(__dirname + '/uploads'));
app.use('/images',express.static(__dirname + '/images'));
app.use(multipartMiddelware);


app.get('/',function(req, res){
  res.sendFile('/home/chaima/application/bardo/app/index.html');
});


//Authentication
app.post('/api/user/signup',authenicationController.signup);
app.post('/api/user/login',authenicationController.login);
//comites
app.post('/api/comite/post',comitecontroller.addComite);
app.get('/api/comite/get',comitecontroller.getComites);
app.delete('/api/comite/remove/:id',comitecontroller.removeComite);
app.put('/api/comite/edit/:id',comitecontroller.editComite);
app.post('/api/comite/vote/:id',comitecontroller.vote);
app.get('/api/comite/get/:id',function(req,res){
  res.send();
})




//lois
app.post('/api/loi/post',loicontroller.addLoi);
app.get('/api/loi/get',loicontroller.getLois);
app.delete('/api/loi/remove/:id',loicontroller.removeLoi);
app.put('/api/loi/edit/:id',loicontroller.editLoi);
//deputes
app.post('/api/depute/post',deputecontroller .addDepute);
app.get('/api/depute/get',deputecontroller .getDeputes);
app.delete('/api/depute/remove/:id',deputecontroller.removeDepute);
app.put('/api/depute/edit/:id',deputecontroller.editDepute);

//comments-loi

app.post('/api/commentl/post',commentlcontroller.postCommentl);
app.get('/api/commentl/get',commentlcontroller.getCommentsl);

//comments-depute

app.post('/api/commentd/post',commentdcontroller.postCommentd);
app.get('/api/commentd/get',commentdcontroller.getCommentsd);

//comments
app.post('/api/comment/post',commentcontroller.postComment);
app.get('/api/comment/get',commentcontroller.getComments);
app.delete('/api/comment/remove/:id',commentcontroller.removeComment)








//user profile
app.post('/api/profile/editPhoto', multipartMiddelware,profileController.updatePhoto);
app.post('/api/profile/updateUsername',profileController.updateUsername);
app.listen('8080', function(){
  console.log("we are listening ");
});
