const express = require('express');
const router = express.Router();
const { getReports, resolveReport } = require('../controllers/reports');

// routes
router
  .route('/')
  .get(getReports);

router
  .route('/:id')
  .patch(resolveReport);

module.exports = router;