const express = require('express');
const { Signup, login ,UserFindOne, userUpdate} = require('../../../controllers/user.controller');
const {create, payment} = require('../../../controllers/transaction.controller');
const { getBooks } = require('../../../controllers/book.controller');
const {UserBodyDataFilter,loginBodyDataFilter} = require('../../../middleware/user.middleware');
const { isAuthorized } = require('../../../middleware/verifyToken.middleware');
const { createOrder, getOrderByUserId } = require('../../../controllers/order.controller');
const router = express.Router();

// -------------------------------------- User Authentication routes ---------------------------------------------
router.post('/user/signup',UserBodyDataFilter,Signup);
router.post('/user/login',loginBodyDataFilter,login);
router.get('/user/find',isAuthorized,UserFindOne);
router.put('/user/update',isAuthorized,userUpdate);

//---------------------------------------- Payment routes ----------------------------------------------------------
router.post('/transaction/create', create);
router.post('/transaction/payment', payment);

//---------------------------------------- Book routes -----------------------------------------------------------
router.get('/book/getBooks', getBooks);
//---------------------------------------- Order routes ---------------------------------------------------------------------

router.post('/order/create',isAuthorized,createOrder)
router.get('/order/myorder',isAuthorized,getOrderByUserId)
module.exports = router;