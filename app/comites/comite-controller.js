(function(){
    angular.module('openbardo')
    .controller('comiteController', [ '$scope', '$state', '$http',
                            function(       $scope,   $state,   $http, $stateParams){


                            $scope.sendComite= function (count) {


                                var request = {
                                    namecomite: $scope.newCommite,
                                    descriptioncomite: $scope.newCommitedescription,

                                    // comiteId: $scope.comite._id
                                }


                              $scope.count=count;
                              console.log(count);

                             $http.post('api/comite/post',request).success(function(){
                                console.log("success");
                                document.getElementById("a").value="";
                                document.getElementById("b").value="";

                             }).error(function(error){
                                console.log("error");
                             })

                             $http.get('api/comite/get').success(function(response){

                                 $scope.comites=response;
                                 $scope.namecomite=response.data;
                                 $scope.descriptioncomite=response.data;


                               })

                        };



                         $scope.remove = function (id){

                           console.log('id designer '+id);
                           $http.delete('api/comite/remove/'+ id).success(function(){


                             $http.get('api/comite/get').success(function(response){
                                 $scope.comites=response;
                                 $scope.namecomite=response.data;
                                 $scope.descriptioncomite=response.data;


                               })
                             })
                           }











                          $scope.clear = function(){
                            document.getElementById("a").value= "";
                            document.getElementById("b").value= "";
                          }

                           $scope.edit = function (id , comite){

                  document.getElementById("a").value= comite.namecomite;
                  document.getElementById("b").value= comite.descriptioncomite;}

// //
// $scope.vote=function(id , count){
//
//
//
//
//   $http.post('api/comite/vote/'+id).success(function(){
//      console.log("success");
//   }).error(function(error){
//      console.log("error");
//   })
//
//
//     event.preventDefault()
//
//
// }
$scope.save= function(id , comite){
var request = {
    namecomite: $scope.newCommite,
    descriptioncomite: $scope.newCommitedescription,

    // comiteId: $scope.comite._id
}


                             $http.put('api/comite/edit/'+id,request).success(function(){
                                console.log("success");
                             }).error(function(error){
                                console.log("error");
                             })

                             $http.get('api/comite/get').success(function(response){
                                 $scope.comites=response;
                                 $scope.namecomite=response.data;
                                 $scope.descriptioncomite=response.data;


                               })
                           }




                        $http.get('api/comite/get').success(function(response){
                            $scope.comites=response;
                            $scope.namecomite=response.data;
                            $scope.descriptioncomite=response.data;


                          })







}

                      ]);

}());
