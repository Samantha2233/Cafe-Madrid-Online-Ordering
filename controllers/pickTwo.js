

var Dish = require('../models/dish');


module.exports = {
    index
}


function index(req, res) {
    Dish.find({}, function(err, dishes){
        res.render('menus/pickTwo', {
            dishes,
            customer: req.user,
            title: 'Pick Two Special | Cafe Madrid',
            pageH1: 'Pick Two Dishes'
        });
    });
}