var Dish = require('../models/dish');


module.exports = {
    index
}


function index(req, res) {
    Dish.find({}, function(err, dishes){
        res.render('menus/lunch', {
            dishes,
            // addOns,
            customer: req.user,
            title: 'Lunch | Cafe Madrid',
            pageH1: 'Lunch Menu'
        });
    });
}


