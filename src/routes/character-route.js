'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/character-controller');

router.get('', controller.get);
router.get('/:characterId', controller.getById);
router.get('/:characterId/comics', controller.getComicsByCharacterId);
router.get('/:characterId/events', controller.getEventsByCharacterId);
router.get('/:characterId/series', controller.getSeriesByCharacterId);
router.get('/:characterId/stories', controller.getStoriesByCharacterId);
router.get('/name/:name', controller.getByName);
router.post('/', controller.post);

module.exports = router;