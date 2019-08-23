var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('menus/lunch', { 
    title: 'Lunch | Cafe Madrid',
    pageH1: 'Lunch Menu'
   });
});

module.exports = router;
