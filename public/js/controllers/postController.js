app.controller('PostController', function($scope, postFactory, myPosts, $rootScope) {

  $scope.posts = myPosts.data;
  // console.log($scope.posts);

  // $scope.getPosts = function() {
  //   postFactory.getPosts()
  //     .then(function(response){
  //       $scope.posts = response;
  //     })
  // }

  $scope.addPost = function() {
    //todo
    // alert('button working in controller');
    postFactory.addPost($scope.text)
      .then(function(response){
        // console.log(response);
        $scope.posts.push(response);
      })
  }

  $scope.upvote = function(post) {
    //todo
    // alert("upvote");
    postFactory.upvote(post._id)
      .then(function(response){
        post.upvotes++;
      })
  }

  $scope.downvote = function(post) {
    //todo
    // alert("downvote");
    postFactory.downvote(post._id)
      .then(function(response){
        post.downvotes++;
      })
  }

  $scope.deletePost = function() {
    //extension todo - only for admins
  }

});
