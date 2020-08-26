'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    type: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('Url', schema);