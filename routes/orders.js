const express = require('express');
const router = express.Router();
var ordersCtrl = require('../controllers/orders');

router.post('/add-dish/:id', ordersCtrl.addDish);


module.exports = router;