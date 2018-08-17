const mongoose = require('mongoose');

const { Schema } = mongoose; // Standard interface used by mongoose to define models

const User = mongoose.model(
  'User',
  new Schema({
    name: { type: String, default: 'Not defined' },
    email: { type: String, default: 'Not defined' },
    password: { type: String, default: 'Not defined' },
    role: { type: String, default: 'Not defined' },
    admin: { type: Boolean, default: false },
    totalTime: { type: Number, default: 0 },
    history: { type: Array, default: [] },
  }),
);

module.exports = User;
