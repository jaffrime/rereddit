app.controller('CommentController', function($scope, $stateParams, postFactory) {

  $scope.addComment = function() {
    //todo
    postFactory.addComment($scope.body)
      .then(function(){

      })
  }

  $scope.upvote = function() {
    //todo
  }

  $scope.downvote = function() {
    //todo
  }

  $scope.deleteComment = function() {
    //extension todo - only for admins
  }

});
