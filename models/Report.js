const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  id: String,
  source: String,
  sourceIdentityId: String,
  reference: {
      referenceId: String,
      referenceType: String
  },
  state: String,
  payload: {
      source: String,
      reportType: String,
      message: String,
      reportId: String,
      referenceResourceId: String,
      referenceResourceType: String
  },
  created: String
})

module.exports = mongoose.model('Report', ReportSchema);