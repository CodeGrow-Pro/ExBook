const express = require('express');
const { Signup, login ,UserFindOne} = require('../../../controllers/user.controller');
const {create, payment} = require('../../../controllers/order.controller');
const {UserBodyDataFilter,loginBodyDataFilter} = require('../../../middleware/user.middleware');
const { isAuthorized } = require('../../../middleware/verifyToken.middleware');
const router = express.Router();

// -------------------------------------- User Authentication routes ---------------------------------------------
router.post('/user/signup',UserBodyDataFilter,Signup);
router.post('/user/login',loginBodyDataFilter,login);
router.get('/user/find',isAuthorized,UserFindOne);

//---------------------------------------- Payment routes ----------------------------------------------------------
router.post('/order/create', create);
router.post('/order/payment', payment);

module.exports = router;