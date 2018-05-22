var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var simpleApp = express();

console.log("### App begins...");

// view engine setup
simpleApp.set('views', path.join(__dirname, 'views'));
simpleApp.set('view engine', 'pug');

simpleApp.use(logger('dev'));
simpleApp.use(express.json());
simpleApp.use(express.urlencoded({ extended: false }));
simpleApp.use(cookieParser());
simpleApp.use(express.static(path.join(__dirname, 'public')));

simpleApp.use('/', indexRouter);
simpleApp.use('/users', usersRouter);

// catch 404 and forward to error handler
simpleApp.use(function( req, res, next) {
  next(createError(404));
});

// error handler
simpleApp.use(function( err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = simpleApp;

console.log("### App done");
