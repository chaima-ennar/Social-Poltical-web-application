(function(){
    angular.module('openbardo')
    .controller('deputeController', [ '$scope', '$state', '$http',
                            function(       $scope,   $state,   $http){

                              $scope.clear = function(){
                                document.getElementById("c").value= "";
                                document.getElementById("d").value= "";
                              }

                            $scope.sendDepute= function () {

                                var request = {
                                    namedepute: $scope.newDepute,
                                    descriptiondepute: $scope.newDeputedescription

                                    // comiteId: $scope.comite._id
                                }
console.log(request);


                             $http.post('api/depute/post',request).success(function(){
                                console.log("success");
                                document.getElementById("c").value="";
                                document.getElementById("d").value="";
                             }).error(function(error){
                                console.log("error");
                             })
                             $http.get('api/depute/get').success(function(response){
                                 $scope.deputes=response;
                                 $scope.namedepute=response.data;
                                 $scope.descriptiondepute=response.data;


                               })


                        };


                        $scope.remove = function (id){

                          console.log('id designer '+id);
                          $http.delete('api/depute/remove/'+ id).success(function(){


                            $http.get('api/depute/get').success(function(response){
                                $scope.deputes=response;
                                $scope.namedepute=response.data;
                                $scope.descriptiondepute=response.data;


                              })
                            })
                          }


                                                     $scope.edit = function (id , depute){

                                            document.getElementById("c").value= depute.namedepute;
                                            document.getElementById("d").value= depute.descriptiondepute;}


                          $scope.save= function(id , depute){
                          var request = {
                              namedepute: $scope.newDepute,
                              descriptiondepute: $scope.newDeputedescription,

                              // comiteId: $scope.comite._id
                          }


           $http.put('api/depute/edit/'+id,request).success(function(){
                console.log("success");
               }).error(function(error){
          console.log("error");
               })
      $http.get('api/depute/get').success(function(response){
     $scope.deputes=response;
     $scope.namedepute=response.data;
     $scope.descriptionloi=response.data;


                                                         })
                                                     }








                        $http.get('api/depute/get').success(function(response){
                            $scope.deputes=response;
                            $scope.namedepute=response.data;
                            $scope.descriptiondepute=response.data;


                          })

                         }







                      ]);

}());
