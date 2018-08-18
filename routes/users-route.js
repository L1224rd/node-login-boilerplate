const express = require('express');
const bodyParser = require('body-parser');
require('../providers/database-provider');

const User = require('../models/user-model');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ==================== ROUTES ==================== //

app.post('/set', (req, res) => {
  // add a user to the database
  req.body.admin = req.body.admin !== undefined; // set the admin wether it is checked or not
  User.create(req.body, (err) => {
    if (err) {
      res.send(err);
      return;
    }
    res.redirect('/register'); // redirect to the same page
  });
});

app.get('/', (req, res) => {
  // returns all the users
  User.find({}, (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(data);
  });
});

app.get('/:id', (req, res) => {
  // return the user specified by id
  User.find({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(data);
  });
});

// ---------- login ---------- //

app.post('/set-password', (req, res) => {
  User.update({ email: req.body.email }, { password: req.body.password }, (err) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send('OK');
  });
});

// ================================================ //

module.exports = app;
