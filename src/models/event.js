'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    resourceURI: {
        type: String,
        required: false
    },
    urls: [{
        type: Schema.Types.ObjectId,
        ref: 'Url'
    }],
    modified: {
        type: Date,
        required: false,
    },
    start: {
        type: Date,
        required: false,
    },
    end: {
        type: Date,
        required: false,
    },
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
    series: {
        type: Schema.Types.ObjectId,
        ref: 'SeriesList'
    },
    characters: {
        type: Schema.Types.ObjectId,
        ref: 'CharacterList'
    },
    creators: {
        type: Schema.Types.ObjectId,
        ref: 'CreatorList'
    },
    next: {
        type: Schema.Types.ObjectId,
        ref: 'EventSummary'
    },
    previous: {
        type: Schema.Types.ObjectId,
        ref: 'EventSummary'
    }
});

module.exports = mongoose.model('Event', schema);