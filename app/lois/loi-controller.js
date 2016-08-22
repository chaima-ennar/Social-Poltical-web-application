(function(){
    angular.module('openbardo')
    .controller('loiController', [ '$scope', '$state', '$http',
                            function(       $scope,   $state,   $http){

                              $scope.clear = function(){
                                document.getElementById("e").value= "";
                                document.getElementById("f").value= "";
                              }

                            $scope.sendLoi= function () {

                                var request = {
                                    nameloi: $scope.newloi,
                                    descriptionloi: $scope.newLoidescription

                                    // comiteId: $scope.comite._id
                                }



                             $http.post('api/loi/post',request).success(function(){
                                console.log("success");
                                document.getElementById("e").value="";
                                document.getElementById("f").value="";
                             }).error(function(error){
                                console.log("error");
                             })
                             $http.get('api/loi/get').success(function(response){
                                 $scope.lois=response;
                                 $scope.nameloi=response.data;
                                 $scope.descriptionloi=response.data;


                               })


                        };

                                                   $scope.edit = function (id , loi){

                                          document.getElementById("e").value= loi.nameloi;
                                          document.getElementById("f").value= loi.descriptionloi;}


                        $scope.save= function(id ,loi){
                        var request = {
                            nameloi: $scope.newloi,
                            descriptionloi: $scope.newLoidescription

                            // comiteId: $scope.comite._idcon

                        }

console.log(request)

                                                     $http.put('api/loi/edit/'+id,request).success(function(){
                                                        console.log("success");
                                                     }).error(function(error){
                                                        console.log("error");
                                                     })

                                                     $http.get('api/loi/get').success(function(response){
                                                         $scope.lois=response;
                                                         $scope.nameloi=response.data;
                                                         $scope.descriptionloi=response.data;


                                                       })
                                                   }



                                                $scope.remove = function (id){

                                                  console.log('id designer '+id);
                                                  $http.delete('api/loi/remove/'+ id).success(function(){


                                                    $http.get('api/loi/get').success(function(response){
                                                        $scope.lois=response;
                                                        $scope.nameloi=response.data;
                                                        $scope.descriptionloi=response.data;


                                                      })
                                                    })
                                                  }








                        $http.get('api/loi/get').success(function(response){
                            $scope.lois=response;
                            $scope.nameloi=response.data;
                            $scope.descriptionloi=response.data;


                          })

                         }







                      ]);

}());
