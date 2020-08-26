'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect('mongodb://teste:Teste.123@ds044229.mlab.com:44229/db_super_herois', { useNewUrlParser: true });

// Carrega os Models
const CharacterDataWrapper = require('./models/characterDataWrapper');
const CharacterDataContainer = require('./models/characterDataContainer');
const Character = require('./models/character');
const Comic = require('./models/Comic');
const Event = require('./models/Event');
const Series = require('./models/Series');
const Story = require('./models/Story');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const characterRoute = require('./routes/character-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/v1/public/characters', characterRoute);

module.exports = app;