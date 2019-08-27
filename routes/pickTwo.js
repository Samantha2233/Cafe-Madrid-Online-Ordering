const express = require('express');
const router = express.Router();
var dishCtrl = require('../controllers/pickTwo');

router.get('/pickTwo', dishCtrl.index);
// router.post('/lunch', dishCtrl.create);


module.exports = router;