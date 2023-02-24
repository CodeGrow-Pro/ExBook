const express = require('express');
const v1Routers = require('./v1/index');
const router = express.Router();
router.use('/api/v1',v1Routers);
module.exports = router;