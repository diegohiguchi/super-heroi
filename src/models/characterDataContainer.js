'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    offset: {
        type: Number,
        required: false
    },
    limit: {
        type: Number,
        required: false
    },
    total: {
        type: Number,
        required: false
    },
    count: {
        type: Number,
        required: false
    },
    results: [{
        character: {
            type: Schema.Types.ObjectId,
            ref: 'Character'
        }
    }]
});

module.exports = mongoose.model('CharacterDataContainer', schema);