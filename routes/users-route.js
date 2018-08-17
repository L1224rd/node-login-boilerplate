const express = require('express');
const bodyParser = require('body-parser');
require('../providers/database-provider');

const User = require('../models/user-model');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// User.remove({}, () => {
//   console.log('removed');
// });

// User.find({}, (err, data) => {
//   console.log(data);
// });

app.post('/set', (req, res) => {
  req.body.admin = req.body.admin !== undefined;
  User.create(req.body, (err) => {
    if (err) {
      res.send(err);
      return;
    }
    res.redirect('/register');
  });
});

module.exports = app;
