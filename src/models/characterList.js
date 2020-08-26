'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    available: {
        type: Number,
        required: false
    },
    returned: {
        type: Number,
        required: false
    },
    collectionURI: {
        type: String,
        required: false,
        trim: true
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'CharacterSummary'
    }]
});

module.exports = mongoose.model('CharacterList', schema);