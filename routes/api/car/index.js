const express = require('express');
const register = require('./register');
const deleteCar = require('./delete');

const router = express.Router();

router.use('/register', register);
router.use('/delete', deleteCar);

module.exports = router;
