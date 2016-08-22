(function(){
  angular.module('openbardo')
  .controller('NavigationController',['$scope','$http','$state',function($scope,$http,$state){
    // var admin={email:"admin@admin.com",id="10"}
//  check if the user is logged in : if there is a User-Data content
   if(localStorage['User-Data']){




  // var eq = Object.toJSON(admin) ===Object.toJSON(User-Data);
  // console.log(eq);

     $scope.loggedIn = true;

   }  else{

     $scope.loggedIn = false ;


    }


    $scope.logUserIn=function(){

      console.log("heelo");
      $http.post('api/user/login',$scope.login).success(function(response){
         localStorage.setItem('User-Data',JSON.stringify(response));
         console.log(response)


         if (response._id==="57ba84380a8c4d13521418af"){

           $scope.adminloggedIn = true;
           console.log( "admin est "+$scope.adminloggedIn);




         }else{

           $scope.adminloggedIn = false ;
              console.log( "admin est "+$scope.adminloggedIn);
         }


         $scope.loggedIn = true ;
         console.log( "user "+$scope.loggedIn);


      }).error(function(error){



       $scope.loggedIn = false ;
console.log( "user "+$scope.loggedIn);

        console.error(error);



      })



    }



    $scope.logOut = function(){
      localStorage.clear();
      $scope.loggedIn = false ;
      document.getElementById("email").value="";
      document.getElementById("password").value="";
    }
  }]);
}());
