app.factory('postFactory', function($http, $rootScope) {

  var posts = {
    //todo
    //add post
    addPost : function (newText) {
      // alert('button working in factory');
      // console.log("User: " + $rootScope.currentUser);
      let newPost = {
        text: newText,
        author: "Jimmy",
        upvotes: 0,
        downvotes: 0
      };
      return $http.post('/posts', newPost)
        .then(function(response){
          // console.log("Post Added!");
          return response.data;
        })
    },

    // //get posts
    // getPosts : function () {
    //   return $http.get('/posts')
    //     .then(function(response){
    //       // console.log(response);
    //       return response.data;
    //     })
    // },

    //up/down vote post
    upvote : function (id) {
      // console.log(id);
      let vote = {
        vote: "up",
      };
      return $http.put('/posts/' + id, vote)
        .then(function(response){
          // console.log(response.data);
        })
    },

    downvote : function (id) {
      let vote = {
        vote: "down",
      };
      return $http.put('/posts/' + id, vote)
        .then(function(response){
          // console.log(response.data);
        })

    },

    // //get post w/ comments
    // getPost : function (postID) {
    //   return $http.get('/posts/' + postID)
    //     .then(function(response){
    //         // console.log(response);
    //         return response.data;
    //     })
    // },


    //add comment (to post)
    addComment : function (body, postID) {
      // alert("posting comment in factory")
      let newComment = {
        body: body,
        author: "the commentator",
        upvotes: 0,
        downvotes: 0,
        post: postID
      };
      return $http.put('/posts/'+postID+'/comments', newComment)
        .then(function(response){
          // console.log(response.data, newComment);
          return response.data;
        })
    },

    //up/down vote comment (belonging to post)
    commentVote : function (commentId, updownBool) {
      console.log(commentId, updownBool);
      let vote = {
        bool: updownBool
      }
      return $http.put('/posts/comments/' + commentId, vote)
        .then(function(response){
          // console.log(response.data);
      })
    }

    //extension: admin can delete post
    //extension: admin can delete comment (from post)
  }
  return posts;
});
