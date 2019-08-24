require('./config/database');
const Dish = require('./models/dish');
const data = require('./data');
var mongoose = require('mongoose');
require('dotenv').config();


Dish.deleteMany({})
.then(function(results){
    console.log(results);
    process.exit();
});