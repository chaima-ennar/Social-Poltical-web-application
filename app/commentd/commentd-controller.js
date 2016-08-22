(function(){
  angular.module('openbardo')
  .controller('commentdController',['$scope', '$http' , '$interval',
                      function( $scope, $http, $interval){



                        if (localStorage['User-Data'] !== undefined){
                            $scope.user = JSON.parse(localStorage['User-Data']);
                            console.log($scope.user);
                        }

                        $scope.sendCommentd = function(event){
                            if (event.which === 13){
                               var request = {
                                    user: $scope.user.username || $scope.user.email,
                                    userId: $scope.user._id,
                                    userImage: $scope.user.image,
                                    content: $scope.newCommentd
                               }


                               $http.post('api/commentd/post', request).success(function(response){

                                    console.log(response);
                                    $scope.commentsd = response;
                                      document.getElementById("commentd").value="";
                               }).error(function(error){
                                    console.error(error);
                               })
                            }
                            $http.get('api/commentd/get').success(function(response){

                                $scope.commentsd=response;})

                        };

            function getCommentsd(initial){
              $http.get('api/commentd/get').success(function(response){
                if (initial){
                  $scope.commentsd=response;

                }else{
                  if (response.length > $scope.commentsd.length){
                    $scope.incomingCommentsd = response;
                  }

                }
              })
            };
            $interval(function(){
              getCommentsd(false);
              if ($scope.incomingCommentsd){
              $scope.difference = $scope.incomingCommentsd.length - $scope.commentsd.length;}
            },5000);

            $scope.setNewCommentsd = function(){
              $scope.commentsd = angular.copy($scope.incomingCommentsd);
              $scope.incomingCommentsd = undefined;
            }
            //initial
            getCommentsd(true);





  }])
})();
