var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, 
    { 
    useNewUrlParser: true,
    useCreateIndex: true
    }
);

// mongoose.connect('mongodb://localhost:27017/cafeMadrid');

mongoose.connection.on('connected', function(){
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;