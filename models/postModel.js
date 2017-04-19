//todo
//each post should have an array of comment ids - suitable for population
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./commentModel');

var postSchema = new Schema({
  text: String,
  author: String,
  upvotes: {type: Number, default: 0},
  downvotes: {type: Number, default: 0},
  // comments: [Comment.schema]
  comments: [{type: Schema.Types.ObjectId, ref: 'comment'}]
});

postSchema.methods.upvote = function () {
  this.upvotes++;
};

postSchema.methods.downvote = function () {
  this.downvotes++;
};

var Post = mongoose.model("post", postSchema);
module.exports = Post;
