app.controller('PostController', function($scope, postFactory, $rootScope) {

  $scope.getPosts = function() {
    postFactory.getPosts()
      .then(function(response){
        $scope.posts = response;
      })
  }

  $scope.addPost = function() {
    //todo
    // alert('button working in controller');
    postFactory.addPost($scope.text)
      .then(function(response){
        console.log(response);
        $scope.posts.push(response);
      })
  }

  $scope.upvote = function() {
    //todo
  }

  $scope.downvote = function() {
    //todo
  }

  $scope.deletePost = function() {
    //extension todo - only for admins
  }

  $scope.getPosts();

});
