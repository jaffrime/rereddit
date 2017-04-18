app.factory('authFactory', function($http) {
  //todo
  var auth = {};
  auth.register = function(user) {
    // console.log("in the factory");
    return $http.post('/auth/register', user);
  };

  return auth;
});
