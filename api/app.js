const express = require('express'),
path = require('path'),
favicon = require('serve-favicon'),
logger = require('morgan'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
passport = require('passport');

const app = express();

require('./config/PassportConfig')(passport);
require('./config/SwaggerConfig')(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', (req, res) => {
    res.redirect('/swagger');
});
app.use(express.static('public'));
if(process.env.NODE_ENV === 'production'){
  app.use(express.errorHandler());
}

module.exports = app;
