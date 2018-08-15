// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// ==================== INTERNAL IMPORTS ==================== //

// const User = require('./models/user');

// ==================== MIDDLEWARE ==================== //

const app = express();

// allow you to access ther server from another server app running in you localhost
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// serving static files
app.use(express.static('views'));

// ==================== DATABASE ==================== //

mongoose.connect(
  // connect to database runing at the specified port
  'mongodb://localhost:27017/citiponto',
  { useNewUrlParser: true },
);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// ==================== FUNCTIONS ==================== //

const getViewPath = view => path.join(__dirname, `views/${view}/${view}.html`);

// ==================== ROUTES ==================== //

app.get('/', (req, res) => {
  res.send('LISTENING ON PORT 3000');
});

app.get('/login', (req, res) => {
  res.sendFile(getViewPath('login'));
});

app.get('/home', (req, res) => {
  res.sendFile(getViewPath('home'));
});

// ==================== START SERVER ==================== //

app.listen(process.env.PORT || 3000, () => {
  console.log('READY');
});

// ====================================================== //
