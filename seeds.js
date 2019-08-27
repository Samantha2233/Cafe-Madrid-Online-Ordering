require('dotenv').config();
require('./config/database');
const Dish = require('./models/dish');
const Customer = require('./models/customer');
const data = require('./data');


Dish.deleteMany({})
.then(function(results){
    console.log(results);
})
.then(function(results){
    console.log(results);
    return Dish.create(data.dishes)
}).then(function(dishes){
    console.log('//////////////////////');
    console.log(dishes);
}).then(function(){
    console.log(Dish);
    process.exit();
});
