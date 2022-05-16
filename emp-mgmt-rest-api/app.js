var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
var logger = require('morgan'); // logger middlware
const { body, validationResult } = require('express-validator');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');

const db = require("./models/mysql");
//db.sequelize.sync(); // this one you can try in prod..but in dev try the following
// In development, you may need to drop existing tables and re-sync database. 
// Just use force: true as following code:
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

 // custom imports
var indexRouter = require('./routes/index');
var employeesRouter = require('./routes/api/employees');
var usersRouter = require('./routes/api/users');
var authRouter = require('./routes/api/auth');

// connecting the model here directly
require('./models/account');
// connecting passport config
require('./config/passportConfig');

var app = express(); //Creates an Express application. 
// The express() function is a top-level function exported by the express module.

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // pug is setup as the view engine

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// static assets are set up
app.use(express.static(path.join(__dirname, 'public')));

// setting up auth middleware 
app.use(passport.initialize())
//app.use(passport.session());

// app.use(session({
//   secret: 'NodeJS is wonderful',
//   saveUninitialized: false,
//   resave: false,
//   cookie: { secure: true }
// }));

// setting up cors
// so that the following urls will honour any req from any domain and port number
app.use(cors()) 

// handling base routes 
app.use('/', indexRouter); 
// Setting up REST API Endpoints
app.use('/api/employees', employeesRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

app.post('/api/contacts', 
  body('name').isLength({min: 2}),
  body('email').isEmail(),
  (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // ideal place to connect with db and exec query 
  res.send('success');
});

app.post(
  '/api/random',
  body('password').isLength({ min: 5 }),
  body('passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match');
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }),
  (req, res) => {
    // Handle the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('valid');
  },
);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(req);
  next(createError(404));
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

module.exports = app;
