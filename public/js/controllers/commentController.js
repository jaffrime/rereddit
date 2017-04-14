app.controller('CommentController', function($scope, $stateParams, postFactory, myPost) {

  $scope.post = myPost.data;
  // console.log(myPost);

  $scope.addComment = function() {
    //todo
    // alert($stateParams.id);
    postFactory.addComment($scope.body, $stateParams.id)
      .then(function(response){
        // console.log(response.comments[response.comments.length-1]);
        // $scope.post.comments.push(response.comments[response.comments.length-1]);
        $scope.post.comments.push(response);
      })
  }

  $scope.upvote = function(commentId) {
    //todo
    // console.log(commentId);
    // true === upvote
    postFactory.commentVote(commentId, true)
      .then(function(response){

    })
  }

  $scope.downvote = function(commentId) {
    //todo
    // console.log(commentId);
    // flase === downvote
    postFactory.commentVote(commentId, false)
      .then(function(response){

    })
  }

  $scope.deleteComment = function() {
    //extension todo - only for admins
  }

});
