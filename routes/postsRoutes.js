//todo
var express = require('express');
var router = express.Router();
var Post = require('../models/postModel');

//add post
router.post('/', function(req, res, next){
  console.log(req.body);
  Post.create(req.body, function(err, post){
    if (err) {
      console.error(err);
    } else {
      res.send(post);
    }
  })
})

//up/down vote post
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
//get post (and it's comments)
//add comment (to post)
//up/down vote comment (belonging to post)
//extension: delete post (admin only)
//extension: remove comment from post (admin only)

module.exports = router;
