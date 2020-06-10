var mongoose = require('mongoose');

var recordSchema = new mongoose.Schema({
  id: String,
  transactionDate: Date,
  amount: Number,
  entityName: String,
  notes: String,
  transactType: String,
  sourceId: String,
  payeeId: String
});

module.exports = mongoose.model('Record', recordSchema);
