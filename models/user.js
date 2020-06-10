var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  categoryIds: [String],
  recordIds: [String],
  entityIds: [String]
});

module.exports = mongoose.model('User', userSchema);
