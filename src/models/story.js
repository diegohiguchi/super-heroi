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
    type: {
        type: String,
        required: false
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
        ref: 'SeriesSummary'
    },
    stories: {
        type: Schema.Types.ObjectId,
        ref: 'ComicList'
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

module.exports = mongoose.model('Story', schema);