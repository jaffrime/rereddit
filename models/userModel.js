//todo
//userSchema and model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var plm = require('passport-local-mongoose');

var userSchema = new Schema ({
  username: String,
  password: String
});

// userSchema.plugin(plm);
var User = mongoose.model("user", userSchema);
module.exports = User;
