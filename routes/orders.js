const express = require('express');
const router = express.Router();
var ordersCtrl = require('../controllers/orders');

router.post('/add-dish/:id', isLoggedIn, ordersCtrl.addDish);
router.get('/orders/:id', isLoggedIn, ordersCtrl.showOrder);


function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}



module.exports = router;