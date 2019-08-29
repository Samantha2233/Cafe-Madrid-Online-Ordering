var Dish = require('../models/dish');
var Order = require('../models/order');
var Customer = require('../models/customer');
var mongoose = require('mongoose');

module.exports = {
    addDish,
    showOrder
}

function addDish(req, res) {
    //find active order for the logged in user
    Order.findOne({
        customer: req.user._id, 
        paid: false
    }, function (err, activeOrder) {
        console.log('////////////////', req.params.id);
        if (!activeOrder) activeOrder = new Order({customer: req.user._id});
        activeOrder.lineItems.push({ dish: req.params.id });
        console.log('AFTER PUSHHH', req.params.id);

        console.log('ACTIVE ORDER\'S LINE ITEMS', activeOrder.lineItems);
        // save the activeOrder containing the lineItem (dish)
        activeOrder.save(function (err) {
            res.redirect('/lunch');
        });
    });
}

function showOrder(req, res){
    console.log('SHOW ORDER FUNCTION CALLED');
    let dishRefs = [];

    let dishes;
    let userDishes;

    Order.find({customer: req.user._id})
    .then(order => {
        order[0].lineItems.forEach(function(lineItem){
            dishRefs.push(new mongoose.Types.ObjectId(lineItem.dish));
        })
    })
    .then(o => {
        Dish.find({ '_id': {
            $in: dishRefs
        } })
        .then(foundDishes => {
            userDishes = foundDishes;
        })
        .then(e => {
           Dish.find({}, function(err, allDishes){
               dishes = allDishes;
               res.render('menus/lunch', {
                   dishes,
                   userDishes,
                   customer: req.user,
                   title: 'Lunch | Cafe Madrid',
                    pageH1: 'Lunch Menu'
               })
           })
        })
    })

    // Order.lineItems.findById(req.params.id, function(err, order){
    //     console.log('showOrder order', order);
    //     res.render('/order');
    // })
}