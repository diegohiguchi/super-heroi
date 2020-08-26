'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    code: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    copyright: {
        type: String,
        required: false
    },
    attributionText: {
        type: String,
        required: false
    },
    attributionHTML: {
        type: String,
        required: false
    },
    data: {
        type: Schema.Types.ObjectId,
        ref: 'CharacterDataContainer'
    },
    etag: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('CharacterDataWrapper', schema);