'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    path: {
        type: String,
        required: false,
    },
    extension: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('Image', schema);