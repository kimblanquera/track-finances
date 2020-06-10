var express = require('express');
var router = express.Router();

var app = express();
var server = require('http').createServer(app);
var Entities = require('../models/entity.js');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/* GET Entities listing. */
router.get('/', function(req, res, next) {
  Entities.find(function(err, result) {
    if(err) {
      return next(err);
    }
    else {
      res.json(result);
    }
  })
  //res.send('respond with a resource');
});

// Get Entity by Id
router.get('/:id', function(req, res, next) {
  Entities.findById(req.params.id, function(err, result) {
    if(err) {
      return next(err);
    }
    else {
      res.json(result);
    }
  })
  //res.send('respond with a resource');
});

// New entity
router.post('/', function(req, res, next) {
    Entities.create(req.body, function (err, result) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(result);
    });
});

// Edit entity
router.put('/', function(req, res, next) {

  Entities.findByIdAndUpdate(req.body._id, req.body, function(err, result) {
    if (err) {
      console.log(err);
      return next(err);
    }
      res.json(result);
  });

});

// Delete entity
router.delete('/:id', function(req, res, next) {
  console.log(req.params.id);

  Entities.findByIdAndDelete(req.params.id, function(err, result) {
    if (err) {
      console.log(err);
      return next(err);
    }
      res.json(result);
  });

});

module.exports = router;
