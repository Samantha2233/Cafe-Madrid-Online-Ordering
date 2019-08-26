const express = require('express');
const router = express.Router();
var dishCtrl = require('../controllers/dish');

/* GET home page. */ //root route
router.get('/', function(req, res) {
  res.render('menus/lunch', {
    customer: req.user,
    title: 'Lunch | Cafe Madrid',
    pageH1: 'Lunch Menu'
   });
});

router.get('/lunch', dishCtrl.index);
// router.post('/lunch', dishCtrl.create);


module.exports = router;
