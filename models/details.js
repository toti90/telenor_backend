const mongoose = require('mongoose');

const detailsSchema = mongoose.Schema({
  release: Number,
  displaySize: String,
  storage: String,
  dimensions: String, 
  weight: Number,
  browser: String,
  battery: Number,
  camera: String
});

module.exports = mongoose.model('Details', detailsSchema);