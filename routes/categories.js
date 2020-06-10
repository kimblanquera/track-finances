var express = require('express');
var router = express.Router();

var app = express();
var server = require('http').createServer(app);
var Categories = require('../models/category.js');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/* GET Categories listing. */
router.get('/', function(req, res, next) {
  Categories.find(function(err, categories) {
    if(err) {
      return next(err);
    }
    else {
      res.json(categories);
    }
  })
  //res.send('respond with a resource');
});

// Get User by Id
router.get('/:id', function(req, res, next) {
  Categories.findById(req.params.id, function(err, categories) {
    if(err) {
      return next(err);
    }
    else {
      res.json(categories);
    }
  })
  //res.send('respond with a resource');
});

// New category
router.post('/', function(req, res, next) {
    Categories.create(req.body, function (err, category) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(category);
    });
});

// Edit Category
router.put('/', function(req, res, next) {

  Categories.findByIdAndUpdate(req.body._id, req.body, function(err, category) {
    if (err) {
      console.log(err);
      return next(err);
    }
      res.json(category);
  });

});

// Delete Category
router.delete('/:id', function(req, res, next) {
  console.log(req.params.id);

  Categories.findByIdAndDelete(req.params.id, function(err, category) {
    if (err) {
      console.log(err);
      return next(err);
    }
      res.json(category);
  });

});

module.exports = router;
