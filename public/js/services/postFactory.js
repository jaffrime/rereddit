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
          console.log("Post Added!");
          return response.data;
        })
    },
    //get posts
    getPosts : function () {
      return $http.get('/posts')
        .then(function(response){
          console.log(response);
          return response.data;
        })
    }
    //up/down vote post
    //add comment (to post)
    //up/down vote comment (belonging to post)
    //extension: admin can delete post
    //extension: admin can delete comment (from post)
  }
  return posts;
});
