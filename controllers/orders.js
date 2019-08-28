var Dish = require('../models/dish');
var Order = require('../models/order');


module.exports = {
    addDish
}


function addDish(req, res) {
    console.log('addDish');
    req.user.populate('orders').execPopulate(function(err){

        var activeOrder = req.user.orders.find(o => !o.paid);
        if(activeOrder){
            activeOrder.lineItems.push({dish: req.params.id});
            req.user.save(function(err){
                res.redirect('/lunch');
            })
        } else {
            var newOrder = new Order({customer: req.user._id});
            newOrder.lineItems.push({dish: req.params.id});
            newOrder.save(function(){
                req.user.orders.push(newOrder._id);
            })
        }
    })
}

