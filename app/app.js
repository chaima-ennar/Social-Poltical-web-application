(function(){
  angular.module('openbardo',['ui.router','ngFileUpload'])
   .config(function($stateProvider,$urlRouterProvider){

     $stateProvider
         .state('signUp',{
         url:"/signup",
         templateUrl:"signup/signup.html",
         controller:"SignupController"
        })



         .state('editProfile',{
         url:"/edit-profile",
         templateUrl: "profile-user/edit-profile-view.html",
         controller : "EditProfileController"

         })
          // .state('com',{
          //   url:"/show-comite",
          //   templateUrl:"comites/comitedetail.html/:id",
          //   controller:"comitedetail"
          //
          // })
          .state('edit',{
            url:"comite/edit",
            templateUrl:"comites/comitedetail.html"
          })
         .state('addComment',{
           url:"/comment",

           templateUrl:"comment/comment.html",
           controller :"commentController"
         })
         .state('addCommentd',{
           url:"/commentd",

           templateUrl:"commentd/commentd.html",
           controller :"commentdController"
         })

         .state('addCommentl',{
           url:"/commentl",

           templateUrl:"commentl/commentl.html",
           controller :"commentlController"
         })
         .state('depute',{
           url:"/depute",
           templateUrl:"deputes/depute.html",
           controller:"deputeController"
         })


         .state('comite',{
           url:"/comite",
           templateUrl:"comites/comite.html",
           controller:"comiteController"
         })

         .state('loi',{
           url:"/loi",
           templateUrl:"lois/loi.html",
           controller:"loiController"
         })

         .state('follow',{
           url :"/follow-comite",
           templateUrl :"follow/follow.html",
           controller :"FollowController"

         })

            .state('comited', {
            url: '/comite/:comiteId',
            templateUrl:"comites/comitedetail.html",
            controller: "comiteDetail"
          })
   })
}());
