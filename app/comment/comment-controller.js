(function(){
  angular.module('openbardo')
  .controller('commentController',['$scope', '$http' , '$interval',
                      function( $scope, $http, $interval){



                        if (localStorage['User-Data'] !== undefined){
                            $scope.user = JSON.parse(localStorage['User-Data']);
                            console.log($scope.user);
                        }

                        $scope.sendComment = function(event){
                            if (event.which === 13){
                               var request = {
                                    user: $scope.user.username || $scope.user.email,
                                    userId: $scope.user._id,
                                    userImage: $scope.user.image,
                                    content: $scope.newComment
                               }


                               $http.post('api/comment/post', request).success(function(response){

                                    console.log(response);
                                    $scope.comments = response;
                                      document.getElementById("comment").value="";
                               }).error(function(error){
                                    console.error(error);
                               })


                            }
                            $http.get('api/comment/get').success(function(response){

                                $scope.comments=response;})

                        };

            function getComments(initial){

              $http.get('api/comment/get').success(function(response){
                if (initial){
                  $scope.comments=response;

                }else{
                  if (response.length > $scope.comments.length){
                    $scope.incomingComments = response;
                  }

                }
              })
            };
            $interval(function(){
              getComments(false);
              if ($scope.incomingComments){
              $scope.difference = $scope.incomingComments.length - $scope.comments.length;}
            },5000);

            $scope.setNewComments = function(){
              $scope.comments = angular.copy($scope.incomingComments);
              $scope.incomingcomments = undefined;
            }
            //initial
            getComments(true);




            $scope.remove = function (id){
              if (localStorage['User-Data'] !== undefined){
                  $scope.user = JSON.parse(localStorage['User-Data']);
                  console.log($scope.user);


              console.log("loc" + $scope.user);


             $scope.utilisateur=localStorage.getItem(['User-Data']);
             console.log("get "+$scope.utilisateur)
              console.log('id designer '+id);
              if($scope.user ===$scope.utilisateur){
              $http.delete('api/comment/remove/'+ id).success(function(){



                  })

                  $http.get('api/comment/get').success(function(response){

                      $scope.comments=response;})
              }}}



  }])
})();
