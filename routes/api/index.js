const express = require('express');
const auth = require('./auth');
const car = require('./car');

const router = express.Router();

router.use('/auth', auth);
router.use('/car', car);
module.exports = router;
