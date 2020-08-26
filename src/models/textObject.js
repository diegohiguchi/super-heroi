'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    type: {
        type: String,
        required: false,
    },
    language: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('TextObject', schema);