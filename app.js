var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoriesRouter = require('./routes/categories');
var entitiesRouter = require('./routes/entities');
var recordsRouter = require('./routes/records');

var mongoose = require('mongoose');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/records', recordsRouter);
app.use('/categories', categoriesRouter);
app.use('/entities', entitiesRouter);

module.exports = app;

mongoose.connect('mongodb://localhost/findb', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>  {
  console.log('connection successful');
  mongoose.set('useFindAndModify', false);
})
  .catch((err) => console.error(err));
