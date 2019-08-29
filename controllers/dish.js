var Dish = require('../models/dish');


module.exports = {
    index,
    create,
    
}


function index(req, res) {
    Dish.find({}, function(err, dishes){
        res.render('menus/lunch', {
            userDishes: null,
            dishes,
            customer: req.user,
            title: 'Lunch | Cafe Madrid',
            pageH1: 'Lunch Menu'
        });
    });
}

function create(req, res){
    const dish = new Dish(req.body);
    dish.save(function(err){
        if(err) console.log(err);
        res.render('menus/lunch');
    });
}



