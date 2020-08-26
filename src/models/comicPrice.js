'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    type: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    }
});

module.exports = mongoose.model('ComicPrice', schema);