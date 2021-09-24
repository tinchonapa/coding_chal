const Report = require('../models/Report.js');

// @desc  GET all reports
// @route  GET /reports
// @access Public
exports.getReports = async (req, res, next) => {
  console.log('GET running');

  // query variables
  const query = { "state": "OPEN", "payload.reportType": "SPAM" }

  try {
    const report = await Report.find( query );  
    return res.status(200).json({
      success: true,
      count: report.length,
      data:report
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// @desc  Resolve a report
// @route  PUT /reports:id
// @access Public
exports.resolveReport = async (req, res, next) => {
  // query variables
  const stateStatus = req.body;
  const query = {id: req.params.id };

  console.log(`Element id ${query.id} state being update it to ${stateStatus.state}`);

  try {
    const updatedReport = await Report.updateOne( query, stateStatus);
    return res.status(200).json({
      success: true,
      matchedCount: updatedReport.matchedCount,
      modifiedCount: updatedReport.modifiedCount
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}