var Dish = require('../models/dish');
var Order = require('../models/order');



module.exports = {
    addDish,
    // showOrder
}


function addDish(req, res) {
    //find active order for the logged in user
    Order.findOne({
        customer: req.user._id, 
        paid: false
    }, function (err, activeOrder) {
        if (!activeOrder) activeOrder = new Order({customer: req.user._id});
        activeOrder.lineItems.push({ dish: req.params.id });
        console.log('ACTIVE ORDER\'S LINE ITEMS', activeOrder.lineItems);
        // save the activeOrder containing the lineItem (dish)
        activeOrder.save(function (err) {
            res.redirect('/lunch');
        });
    });
    showOrder();
}


function showOrder(req, res){
    console.log('SHOW ORDER FUNCTION CALLED', );
    Order.findOne({
        customer: req.user._id, 
        paid:false
    }, function(err, order){
        console.log(order);
    })
}