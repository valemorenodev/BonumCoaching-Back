const mongoose = require('mongoose');

const secionsSchema = mongoose.Schema({
  person: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Secions', secionsSchema);