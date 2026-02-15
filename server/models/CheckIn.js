const mongoose = require('mongoose');

const CheckInSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // We'll link this to login later
  date: { type: Date, default: Date.now },
  sleep: Boolean,
  stress: Boolean,
  caffeine: Boolean,
  water: Boolean,
  meditation: Boolean,
  moodScore: Number // We can calculate this (e.g., Yes = 1, No = 0)
});

module.exports = mongoose.model('CheckIn', CheckInSchema);