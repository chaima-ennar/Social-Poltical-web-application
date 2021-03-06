(function(){
    angular.module('openbardo')
    .controller('EditProfileController', ['Upload', '$scope', '$state', '$http',
                            function(      Upload,   $scope,   $state,   $http){

                $scope.user = JSON.parse(localStorage['User-Data']) || undefined;

                $scope.$watch(function(){
                    return $scope.file
                }, function (){
                   $scope.upload($scope.file);
                });



                $scope.upload = function (file) {
                    if (file){
                        Upload.upload({
                            url: 'api/profile/editPhoto',
                            method: 'POST',
                            data: {userId: $scope.user._id},
                            file: file
                        }).progress(function(evt){
                            console.log("firing");
                        }).success(function(data){

                        }).error(function(error){
                            console.log(error);
                        })
                    }
                };

                $scope.updateUsername = function () {
                    var request = {
                        userId: $scope.user._id,
                        username: $scope.user.username
                    }
                    console.log($scope.user._id)

                 $http.post('api/profile/updateUsername', request).success(function(){
                    console.log("success");
                 }).error(function(error){
                    console.log("error");
                 })
                 document.getElementById("name").value="";
                };


                            }]);
}());
