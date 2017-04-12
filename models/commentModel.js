//todo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  body: String,
  author: String,
  upvotes: Number,
  downvotes: Number,
  post_id: String
});

var Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
