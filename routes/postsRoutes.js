//todo
var express = require('express');
var router = express.Router();
var Post = require('../models/postModel');
var Comment = require('../models/commentModel');

//as we are using modular route handlers we use router.param an not app.param
router.param('postid', function(req, res, next, id) {
  Post.findById(id, function(err, post) {
    if (err) {
      return next(err);
    } else if (!post) {
      return next(new Error('Post does not exist'));
    } else {
      req.post = post;  //put the post on the request object for the next function in line to use
      return next();
    }
  });
});

//add post
router.post('/', function(req, res, next){
  // console.log(req.body);
  Post.create(req.body, function(err, post){
    if (err) {
      console.error(err);
    } else {
      res.send(post);
    }
  })
})

//up/down vote post
router.put('/:postid/', function(req, res, next) {
  // console.log(req.post, req.body);
  if(req.body.vote === "up"){
    // req.post.upvotes += 1;
    req.post.upvote();
  } else {
    // req.post.downvotes +=1;
    req.post.downvote();
  }

  req.post.save(function(err, post){
    if (err) {
      return next(err);
    } else {
      // console.log(req.post);
      return res.send(post);
    }
  })
})

//get posts
router.get('/', function(req, res, next){
  Post.find(function(err, posts){
    if (err) {
      console.error(err);
    } else {
      res.send(posts);
    }
  })
})

//delete post
router.delete('/:postid', function(req, res, next) {
  req.post.remove(function(err, result) {
    if (err) {
      return next(err);
    } else {
      return res.send(result);
    }
  });
});

//get post (and it's comments)
router.get('/:postid', function(req, res, next) {
  // console.log("request seen by server");
  // console.log(req.post);
  return res.json(req.post);
})

//add comment (to post)
router.put('/:postid/comments', function(req, res, next){
  // console.log(req.post, req.body);
  Comment.create(req.body, function(err, post){
    if (err) {
      console.error(err);
    } else {
      // res.send(post);
      req.post.comments.push(req.body);
      req.post.save(function(err, result){
        if (err) {
          return next(err);
        } else {
          return res.send(result);
        }
      })
    }
  })
})

//up/down vote comment (belonging to post)
router.put('/comments/:commentid', function(req, res, next) {
  console.log("in the server", req.body);

  Comment.findById(req.params.commentid, function(err, comment){
    if (err) {
      console.error(err);
    } else {
      console.log(comment);
    }
  })
})

//extension: delete post (admin only)
//extension: remove comment from post (admin only)

module.exports = router;
