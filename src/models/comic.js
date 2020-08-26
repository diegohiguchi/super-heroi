'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    digitalId: {
        type: Number,
        required: false,
    },
    title: {
        type: String,
        required: false
    },
    issueNumber: {
        type: Number,
        required: false
    },
    variantDescription: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    modified: {
        type: Date,
        required: false,
    },
    isbn: {
        type: String,
        required: false
    },
    upc: {
        type: String,
        required: false
    },
    diamondCode: {
        type: String,
        required: false
    },
    ean: {
        type: String,
        required: false
    },
    issn: {
        type: String,
        required: false
    },
    format: {
        type: String,
        required: false
    },
    pageCount: {
        type: Number,
        required: false
    },
    textObjects: [{
        type: Schema.Types.ObjectId,
        ref: 'TextObject'
    }],
    resourceURI: {
        type: String,
        required: false
    },
    urls: [{
        type: Schema.Types.ObjectId,
        ref: 'Url'
    }],
    series: {
        type: Schema.Types.ObjectId,
        ref: 'SeriesSummary'
    },
    variants: [{
        type: Schema.Types.ObjectId,
        ref: 'ComicSummary'
    }],
    collections: [{
        type: Schema.Types.ObjectId,
        ref: 'ComicSummary'
    }],
    collectedIssues: [{
        type: Schema.Types.ObjectId,
        ref: 'ComicSummary'
    }],
    dates: [{
        type: Schema.Types.ObjectId,
        ref: 'ComicDate'
    }],
    prices: [{
        type: Schema.Types.ObjectId,
        ref: 'ComicPrice'
    }],
    thumbnail: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    },
    creators: {
        type: Schema.Types.ObjectId,
        ref: 'CreatorList'
    },
    characters: {
        type: Schema.Types.ObjectId,
        ref: 'CharacterList'
    },
    stories: {
        type: Schema.Types.ObjectId,
        ref: 'StoryList'
    },
    events: {
        type: Schema.Types.ObjectId,
        ref: 'EventList'
    }
});

module.exports = mongoose.model('Comic', schema);