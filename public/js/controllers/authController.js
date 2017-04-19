app.controller('AuthController', function($scope, $state, authFactory) {
  //todo

  $scope.currentUser = authFactory.currentUser;

  $scope.register = function () {
    // console.log("in the AuthController");
    authFactory.register($scope.user)
      .then(function(){
        $state.go('home');
      }, function(err){
        alert(err.data.message);
      });
  }

  $scope.login = function () {
    authFactory.login($scope.user)
      .then(function(){
        $state.go('home');
      }, function(err){
        alert(err.data);
      });
  }

  $scope.logout = authFactory.logout;

  authFactory.getCurrentUser();



});
