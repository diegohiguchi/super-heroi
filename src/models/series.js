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
    startYear: {
        type: Number,
        required: false,
    },
    endYear: {
        type: Number,
        required: false,
    },
    rating: {
        type: String,
        required: false,
    },
    modified: {
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
    events: {
        type: Schema.Types.ObjectId,
        ref: 'EventList'
    },
    characters: {
        type: Schema.Types.ObjectId,
        ref: 'CharacterList'
    },
    creators: {
        type: Schema.Types.ObjectId,
        ref: 'CreatorList'
    },
    originalissue: {
        type: Schema.Types.ObjectId,
        ref: 'ComicSummary'
    },
});

module.exports = mongoose.model('Series', schema);