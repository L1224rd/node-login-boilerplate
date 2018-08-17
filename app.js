// ==================== EXTERNAL IMPORTS ==================== //

const express = require('express');
const path = require('path');

// ==================== INTERNAL IMPORTS ==================== //

const providers = require('./routes/providers-route');
const users = require('./routes/users-route');

// ==================== MIDDLEWARE ==================== //

const app = express();

// allow you to access ther server from another app running in you localhost
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// serving static files
app.use(express.static('views'));

// ==================== FUNCTIONS ==================== //

// returns the full path of the passed view
const getViewPath = view => path.join(__dirname, `views/${view}/${view}.html`);

// ==================== RENDER VIEWS ==================== //

app.get('/', (req, res) => {
  res.send('LISTENING ON PORT 3000');
});

app.get('/login', (req, res) => {
  res.sendFile(getViewPath('login'));
});

app.get('/home', (req, res) => {
  res.sendFile(getViewPath('home'));
});

app.get('/register', (req, res) => {
  res.sendFile(getViewPath('register'));
});

// ==================== ROUTES ==================== //

app.use('/providers', providers);

app.use('/users', users);

// ==================== START SERVER ==================== //

app.listen(process.env.PORT || 3000, () => {
  console.log('READY');
});

// ====================================================== //
