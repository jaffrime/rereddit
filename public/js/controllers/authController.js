app.controller('AuthController', function($scope, authFactory) {
  //todo
  $scope.register = function () {
    // console.log("in the AuthController");
    authFactory.register($scope.user);
  }
});
