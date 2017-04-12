//todo
//everything you need to get a server up and running
//middleware, routes, database connection etc
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
var request = require('request'); //not actually needed
var User = require('./models/userModel');
var Post = require('./models/postModel');
var Comment = require('./models/commentModel');
// var authRoutes = require('./routes/authRoutes');
var postsRoutes = require('./routes/postsRoutes');

mongoose.connect('mongodb://localhost/rereddit');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('node_modules'));

/* TODO: to figure out...
//configure passport and session middleware
app.use(expressSession({
    secret: 'yourSecretHere',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// configure passport-local to use user model for authentication
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/

//API routes

// app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);

app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
});


//start the server
app.listen(8000, function() {
  console.log("ReReddit Project. Listening on 8000.")
});
