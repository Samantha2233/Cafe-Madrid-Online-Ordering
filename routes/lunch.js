const express = require('express');
const router = express.Router();
var dishCtrl = require('../controllers/dish');

router.get('/lunch', dishCtrl.index);

router.get('/add-menu-item', dishCtrl.formForNewDish);

router.post('/', dishCtrl.create);

module.exports = router;
