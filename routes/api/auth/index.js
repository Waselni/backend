const express = require('express');
const login = require('./login');
const register = require('./register');
const deleteUser = require('./delete');
const getUser = require('./getUser');
const getUsers = require('./getUsers');
const editUser = require('./editUser');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.delete('/delete', deleteUser);
router.post('/getUser', getUser);
router.use('/getUsers', getUsers);
router.use('/editUser', editUser);

module.exports = router;
