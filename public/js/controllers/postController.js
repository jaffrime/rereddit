app.controller('PostController', function($scope, postFactory, myPosts) {

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
    // console.log($scope.currentUser);
    postFactory.addPost($scope.text, $scope.currentUser)
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

  $scope.deletePost = function(postId) {
    //extension todo - only for admins
    postFactory.deleteVote(postId)
      .then(function(){
        // console.log("deleted");
        for (let i = 0; i < $scope.posts.length; i++){
          if ($scope.posts[i]._id === postId) {
            $scope.posts.splice(i,1);
          }
        }
      });
  }

});
