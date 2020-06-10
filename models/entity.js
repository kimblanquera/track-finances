var mongoose = require('mongoose');

var entitySchema = new mongoose.Schema({
  id: String,
  name: String,
  categoryId: String,
  subcat: String,
  scheduledDay: Number,
  setAuto: Boolean,
  remindDays: Number,
  transactType: String
});

module.exports = mongoose.model('Entity', entitySchema);
