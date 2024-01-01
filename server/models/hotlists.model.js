// models/Banner.js

const mongoose = require('mongoose');

const hotListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    symbolImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    percentageChange: {
        type: Number,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
});

const Hotlist = mongoose.model('Hotlist', hotListSchema);

module.exports = Hotlist;
