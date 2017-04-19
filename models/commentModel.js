//todo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  downvotes: {type: Number, default: 0},
  // post_id: String
  post: {type: Schema.Types.ObjectId, ref: 'post'}
});

commentSchema.methods.upvote = function () {
  this.upvotes++;
};

commentSchema.methods.downvote = function () {
  this.downvotes++;
};

var Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
