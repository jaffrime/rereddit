app.controller('CommentController', function($scope, $stateParams, postFactory, myPost) {

  $scope.post = myPost.data;
  // console.log(myPost);

  $scope.addComment = function() {
    //todo
    // alert($stateParams.id);
    postFactory.addComment($scope.body, $scope.currentUser, $stateParams.id)
      .then(function(response){
        // console.log(response.comments[response.comments.length-1]);
        // $scope.post.comments.push(response.comments[response.comments.length-1]);
        $scope.post.comments.push(response);
      })
  }

  $scope.upvote = function(comment) {
    //todo
    // console.log(commentId);
    // true === upvote
    postFactory.commentVote(comment._id, true)
      .then(function(response){
        // console.log(response);
        comment.upvotes++;
    })
  }

  $scope.downvote = function(comment) {
    //todo
    // console.log(commentId);
    // false === downvote
    postFactory.commentVote(comment._id, false)
      .then(function(response){
        // console.log(response);
        comment.downvotes++;
    })
  }

  $scope.deleteComment = function(commentId) {
    //extension todo - only for admins
    // console.log(commentId);
    postFactory.deleteComment(commentId)
      .then(function(){
        // console.log("comment deleted");
        for (let i = 0; i < $scope.post.comments.length; i++){
          if ($scope.post.comments[i]._id === commentId) {
            $scope.post.comments.splice(i,1);
          }
        }
      })
  }

}); //controller
