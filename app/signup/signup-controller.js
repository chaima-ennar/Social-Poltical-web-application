


  (function(){
  angular.module('openbardo')
  .controller('SignupController',['$scope','$state','$http',function($scope,$state,$http){
       $scope.createuser =function(){
         console.log($scope.newuser);
         $http.post('api/user/signup',$scope.newuser).success(function(response){

         }).error(function(error)
       {
         console.log(error);
       })
       }
  }]);
}());
