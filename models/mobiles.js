
const mongoose = require('mongoose');
const Details = require('./details');

const mobilesSchema = mongoose.Schema({
  _id: String,
  title: String,
  key: String,
  children: []
});

module.exports = mongoose.model('Mobiles', mobilesSchema);