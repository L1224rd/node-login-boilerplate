const mongoose = require('mongoose');

const { Schema } = mongoose; // Standard interface used by mongoose to define models

const User = mongoose.model(
  'User',
  new Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    admin: Boolean,
    totalTime: Number,
    history: Array,
  }),
);

module.exports = User;
