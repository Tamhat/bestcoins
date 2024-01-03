// models/Banner.js

const mongoose = require('mongoose');

const coinsslider1Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    symbolImage: {
        type: String,
        required: true
    },
});

const coinsslider2Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    symbolImage: {
        type: String,
        required: true
    },
});

const coinsslider3Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    symbolImage: {
        type: String,
        required: true
    },
});


const  Coinsslider1 = mongoose.model('Coinsslider1', coinsslider1Schema);
const  Coinsslider2 = mongoose.model('Coinsslider2', coinsslider2Schema);
const  Coinsslider3 = mongoose.model('Coinsslider3', coinsslider3Schema);

module.exports =  {
    Coinsslider1,
    Coinsslider2,
    Coinsslider3
};