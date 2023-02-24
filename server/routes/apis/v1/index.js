const express = require('express');
const { Signup, login } = require('../../../controllers/user.controller');
const {UserBodyDataFilter,loginBodyDataFilter} = require('../../../middleware/user.middleware');
const router = express.Router();

// -------------------------------------- User Authentication routes ---------------------------------------------
router.post('/user/signup',UserBodyDataFilter,Signup);
router.post('/user/login',loginBodyDataFilter,login);

module.exports = router;