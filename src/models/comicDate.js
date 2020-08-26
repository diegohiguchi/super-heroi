'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    type: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    }
});

module.exports = mongoose.model('ComicDate', schema);