const express = require('express');
const login = require('./login');
const register = require('./register');
const deleteUser = require('./delete');
const getUser = require('./getUser');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.delete('/delete', deleteUser);
router.get('/getUser', getUser);

module.exports = router;
