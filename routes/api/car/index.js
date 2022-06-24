const express = require('express');
const register = require('./register');
const deleteCar = require('./delete');
const editCar = require('./edit');
const getCar = require('./getCar');

const router = express.Router();

router.use('/register', register);
router.use('/delete', deleteCar);
router.use('/edit', editCar);
router.use('/getCar', getCar);
module.exports = router;
