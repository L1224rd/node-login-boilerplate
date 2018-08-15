const mongoose = require('mongoose');

const { Schema } = mongoose; // Standard interface used by mongoose to define models

const User = mongoose.model(
  'User',
  new Schema({
    name: String,
    email: String,
    password: String,
    rank: { type: Number, default: 1 },
  }),
);

module.exports = User;
