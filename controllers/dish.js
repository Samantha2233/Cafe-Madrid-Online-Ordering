var Dish = require('../models/dish');


module.exports = {
    index,
    create,
    formForNewDish
}


function index(req, res) {
    Dish.find({}, function(err, dishes){
        res.render('menus/lunch', {
            userDishes: [],
            dishes,
            customer: req.user,
            title: 'Lunch | Cafe Madrid',
            pageH1: 'Lunch Menu'
        });
    });
}

function create(req, res){
    //handle empty feilds
    for(let key in req.body){
        if(req.body[key]==='') delete req.body[key];
    }
    //instantiate new dish
    const dish = new Dish(req.body);
    // save new dish
    dish.save(function(err){
        if(err) console.log(err);
        res.render('menus/lunch');
    });
}


function formForNewDish(req, res) {
    res.render('menus/add-menu-item', {
        customer: req.user,
        title: 'Add a New Dish'
    });
}