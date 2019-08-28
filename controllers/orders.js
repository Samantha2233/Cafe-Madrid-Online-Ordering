var Dish = require('../models/dish');
var Order = require('../models/order');
var Customer = require('../models/customer');



module.exports = {
    addDish
}


function addDish(req, res) {
    //find customer by id of logged in user (& populate orders?)
    Customer.findById(req.user._id).populate('orders').exec(function(err, currentCustomer){
    //if customer has ordered before...
        if(currentCustomer.orders.length > 0){
            console.log('if hit');
            var activeOrder = currentCustomer.orders.find(o => !o.paid);
            activeOrder.lineItems.push({dish: req.params.id});
            currentCustomer.save(function(err){
                res.redirect('/lunch');
            });
        // if customer has never ordered before... create a new order
        } else {
            console.log('else hit');
            var newOrder = new Order({customer: currentCustomer._id});
            console.log('new order', newOrder);
            console.log('before push', newOrder.lineItems);
            // push dish id into line items of order
            newOrder.lineItems.push({dish: req.params.id});
            console.log('after push', newOrder.lineItems);
            // save this new order containing line items
            newOrder.save(function(err, savedOrder){
                console.log('saved order', savedOrder);
                currentCustomer.orders.push(savedOrder._id);
                currentCustomer.save(function(err, savedCustomer){
                    console.log('lineitems',savedCustomer.orders[0].lineItems);
                    console.log('orders[0].dish', savedCustomer.orders[0].lineItems);
                    res.redirect('/lunch');
                });
            });
        }
    });
}

