'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    resourceURI: {
        type: String,
        required: false,
        trim: true
    },
    name: {
        type: String,
        required: false,
        trim: true
    }
});

module.exports = mongoose.model('EventSummary', schema);