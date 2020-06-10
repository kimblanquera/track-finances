var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  id: String,
  name: String,
  subcategories: [String]
});

module.exports = mongoose.model('Category', schema);
