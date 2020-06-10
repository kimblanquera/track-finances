var express = require('express');
var router = express.Router();

var app = express();
var server = require('http').createServer(app);
var Records = require('../models/record.js');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/* GET Records listing. */
router.get('/', function(req, res, next) {
  Records.find(function(err, results) {
    if(err) {
      return next(err);
    }
    else {
      res.json(results);
    }
  })
  //res.send('respond with a resource');
});

// Get User by Id
router.get('/:id', function(req, res, next) {
  Records.findById(req.params.id, function(err, results) {
    if(err) {
      return next(err);
    }
    else {
      res.json(results);
    }
  })
  //res.send('respond with a resource');
});

// New category
router.post('/', function(req, res, next) {
    Records.create(req.body, function (err, result) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(result);
    });
});

// Edit Category
router.put('/', function(req, res, next) {

  Records.findByIdAndUpdate(req.body._id, req.body, function(err, result) {
    if (err) {
      console.log(err);
      return next(err);
    }
      res.json(result);
  });

});

// Delete Category
router.delete('/:id', function(req, res, next) {
  console.log(req.params.id);

  Records.findByIdAndDelete(req.params.id, function(err, result) {
    if (err) {
      console.log(err);
      return next(err);
    }
      res.json(result);
  });

});

module.exports = router;
