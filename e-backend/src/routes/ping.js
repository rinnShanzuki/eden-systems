const express = require('express');
const router = express.Router();

/**
 * GET /api/ping
 * Simple health-check endpoint to verify frontend → backend connection.
 */
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'pong 🏓',
    timestamp: new Date().toISOString(),
    server: 'e-backend',
  });
});

module.exports = router;
