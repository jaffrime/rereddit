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

  $scope.upvote = function(id, post) {
    //todo
    // alert("upvote");
    postFactory.upvote(id)
      .then(function(response){
        post.upvotes++;
      })
  }

  $scope.downvote = function(id, post) {
    //todo
    // alert("downvote");
    postFactory.downvote(id)
      .then(function(response){
        post.downvotes++;
      })
  }

  $scope.deletePost = function() {
    //extension todo - only for admins
  }

  $scope.getPosts();

});
