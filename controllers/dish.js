var Dish = require('../models/dish');


module.exports = {
    index,
    create
}

function index(req, res){
    Dish.find({})
    .then(function(dishes){

    })
    .catch(function(err){
        res.status(500).json(err);
    });
}

function create(req, res){
    Dish.create(req.body).then(function(newDish){
        res.status(201).json(newDish);
    });
}