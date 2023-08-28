const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({

    id:{
        type: Number,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,       
    },
    imageUrl:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    images: [{
        type: String,
        required: true,
    }]

});

const Place = mongoose.model('USER',placeSchema);
module.exports = Place;