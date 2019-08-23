const express = require('express');
const router = express.Router();




/* GET home page. */ //root route
router.get('/', function(req, res) {
  res.render('menus/lunch', {
    customer: req.user,
    title: 'Lunch | Cafe Madrid',
    pageH1: 'Lunch Menu'
   });
});




module.exports = router;
