app.factory('authFactory', function($http) {
  //todo
  var auth = {};

  auth.currentUser = {};

  auth.register = function(user) {
    // console.log("in the factory");
    return $http.post('/auth/register', user)
      .then(function(response){
        auth.currentUser.username = response.data;
      });
  };

  auth.login = function(user) {
    return $http.post('auth/login', user)
      .then(function(response){
        auth.currentUser.username = response.data;
      });
  };

  auth.logout = function(){
      return $http.get('/auth/logout')
        .then(function(response){
          auth.currentUser.username = null;
        });
    };

  auth.getCurrentUser = function(){
      return $http.get('/auth/currentUser')
        .then(function(response){
          console.log(response.data);
          auth.currentUser.username = response.data;
        })
    };

  return auth;
});
