const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('../providers'));

app.get('/:file', (req, res) => {
  res.sendFile(path.join(__dirname, `../providers/${req.params.file}`));
});

module.exports = app;
