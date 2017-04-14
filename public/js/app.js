var app = angular.module('rereddit', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: 'PostController',
      resolve: {
        myPosts: function($http) {
          return $http.get('/posts');
        }
      }
    })
    .state('comment', {
      url: '/post/:id',
      templateUrl: '/templates/comments.html',
      controller: 'CommentController',
      resolve: {
        myPost: function($http, $stateParams) {
          // console.log($stateParams);
          let id = $stateParams.id;
          // console.log(id);
          return $http.get('/posts/' + id);
        }
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'AuthController'
    });

  $urlRouterProvider.otherwise('home');

});
