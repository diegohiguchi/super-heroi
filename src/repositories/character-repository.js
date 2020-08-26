'use strict';
const mongoose = require('mongoose');
const Character = mongoose.model('Character');
const Comic = mongoose.model('Comic');
const Event = mongoose.model('Event');
const Series = mongoose.model('Series');
const Story = mongoose.model('Story');

exports.get = async () => {
    const res = await Character.find({
    });
    return res;
}

exports.getById = async (id) => {
    const res = await Character
        .findById(id)
        .populate('comics');

    return res;
}

exports.getComicsByCharacterId = async (id) => {
    const res = await Comic
        .findOne({
            characterId: id,
        });

    return res;
}

exports.getEventsByCharacterId = async (id) => {
    const res = await Event
        .findOne({
            characterId: id,
        });

    return res;
}

exports.getSeriesByCharacterId = async (id) => {
    const res = await Series
        .findOne({
            characterId: id,
        });

    return res;
}

exports.getStoriesByCharacterId = async (id) => {
    const res = await Story
        .findOne({
            characterId: id,
        });

    return res;
}

exports.getByName = async (name) => {
    const res = await Character
        .findOne({
            name: name,
        });

    return res;
}

exports.create = async (data) => {
    var character = new Character(data);
    await character.save();
}