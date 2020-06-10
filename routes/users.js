var express = require('express');
var router = express.Router();

var app = express();
var server = require('http').createServer(app);
var Users = require('../models/user.js');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.find(function(err, users) {
    if(err) {
      return next(err);
    }
    else {
      res.json(users);
    }
  })
  //res.send('respond with a resource');
});

// Get User by Id
router.get('/:id', function(req, res, next) {
  Users.findById(req.params.id, function(err, users) {
    if(err) {
      return next(err);
    }
    else {
      res.json(users);
    }
  })
  //res.send('respond with a resource');
});

// New User
router.post('/', function(req, res, next) {
    Users.create(req.body, function (err, user) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(user);
    });
});

// Authenticate
router.post('/authenticate', function(req, res, next) {
  Users.findOne({
    email: req.body.email,
    password: req.body.password
  }, function(err, user) {
    if (err) {
        console.log(err);
        return next(err);
    }
    res.json(user);
  });

});

// Edit User
router.put('/', function(req, res, next) {

  Users.findByIdAndUpdate(req.body._id, req.body, ({new: true}), function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(user);
      res.json(user);
  });

});

module.exports = router;
