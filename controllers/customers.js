var Customer = require('../models/customer');

module.exports = {
    index
}

function index(req, res){
    res.render('menus/lunch', {
        customer: req.user
    });
}