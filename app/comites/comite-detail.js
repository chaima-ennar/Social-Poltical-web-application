(function(){
    angular.module('openbardo')
    .controller('comiteDetail', ['$scope', '$state', '$http',
      function($scope,   $state,   $http, $stateParams){
        console.log("hello");
        $scope.id = $stateParams.comiteId;
        $scope.voir= function (id,comite){
          console.log(id);
        $http.get('api/comite/get'+id).success(function(response){
         $scope.comites=response;
         $scope.namecomite=response.data;
         $scope.descriptioncomite=response.data;
       });
     }
  }
])
})
