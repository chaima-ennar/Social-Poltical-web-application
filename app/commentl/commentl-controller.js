(function(){
  angular.module('openbardo')
  .controller('commentlController',['$scope', '$http' , '$interval',
                      function( $scope, $http, $interval){



                        if (localStorage['User-Data'] !== undefined){
                            $scope.user = JSON.parse(localStorage['User-Data']);
                            console.log($scope.user);
                        }

                        $scope.sendCommentl = function(event){
                            if (event.which === 13){
                               var request = {
                                    user: $scope.user.username || $scope.user.email,
                                    userId: $scope.user._id,
                                    userImage: $scope.user.image,
                                    content: $scope.newCommentl
                               }


                               $http.post('api/commentl/post', request).success(function(response){

                                    console.log(response);
                                    $scope.commentsl = response;
                                        document.getElementById("commentl").value="";
                               }).error(function(error){
                                    console.error(error);
                               })
                            }
                            $http.get('api/commentl/get').success(function(response){

                                $scope.commentsl=response;})

                        };

            function getCommentsl(initial){
              $http.get('api/commentl/get').success(function(response){
                if (initial){
                  $scope.commentsl=response;

                }else{
                  if (response.length > $scope.commentsl.length){
                    $scope.incomingCommentsl = response;
                  }

                }
              })
            };
            $interval(function(){
              getCommentsl(false);
              if ($scope.incomingComments){
              $scope.difference = $scope.incomingCommentsl.length - $scope.commentsl.length;}
            },5000);

            $scope.setNewCommentsl = function(){
              $scope.commentsl = angular.copy($scope.incomingCommentsl);
              $scope.incomingCommentsl = undefined;
            }
            //initial
            getCommentsl(true);





  }])
})();
