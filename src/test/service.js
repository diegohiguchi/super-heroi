const { get } = require('axios');

const URL = 'http://localhost:3000/v1/public/characters';

async function getByName(name) {
    const url = `${URL}/name/${name}`;
    const result = await get(url);
    return mapCharacter(result.data);
}

async function getComicsByCharacterId(characterId) {
    const url = `${URL}/${characterId}/comics`;
    const result = await get(url);
    return mapCharacterId(result.data);
}

async function getEventsByCharacterId(characterId) {
    const url = `${URL}/${characterId}/events`;
    const result = await get(url);
    return mapCharacterId(result.data);
}

async function getSeriesByCharacterId(characterId) {
    const url = `${URL}/${characterId}/series`;
    const result = await get(url);
    return mapCharacterId(result.data);
}

async function getStoriesByCharacterId(characterId) {
    const url = `${URL}/${characterId}/stories`;
    const result = await get(url);
    return mapCharacterId(result.data);
}

function mapCharacter(item) {
    return {
        name: item.name
    }
}

function mapCharacterId(item) {
    return {
        _id: item._id
    }
}

module.exports = {
    getByName,
    getComicsByCharacterId,
    getEventsByCharacterId,
    getSeriesByCharacterId,
    getStoriesByCharacterId
}