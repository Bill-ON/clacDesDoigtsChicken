const mongoose = require('mongoose')

/*
isRunning: Boolean (default false) Puis le webservice /chicken/run
augmentera la variable steps de 1.
*/

const chickenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  steps: {
    type: Number,
    default: 0
  },
  isRunning: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Chicken', chickenSchema)