'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: false,
        trim: true
    },
    description: {
        type: String,
        required: false,
    },
    modified: {
        type: Date,
        required: false,
        default: Date.now
    },
    resourceURI: {
        type: String,
        required: false,
    },
    urls: [{
        type: Schema.Types.ObjectId,
        ref: 'Url'
    }],
    thumbnail: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    },
    comics: {
        type: Schema.Types.ObjectId,
        ref: 'ComicList'
    },
    stories: {
        type: Schema.Types.ObjectId,
        ref: 'StoryList'
    },
    events: {
        type: Schema.Types.ObjectId,
        ref: 'EventList'
    },
    series: {
        type: Schema.Types.ObjectId,
        ref: 'SeriesList'
    }
});

module.exports = mongoose.model('Character', schema);