const assert = require('assert');
const { getByName } = require('./service');
const nock = require('nock');

describe('Super Herois Tests', function () {
    this.beforeAll(() => {
        const response = {
            "urls": [],
            "_id": "5f449d824d88151a5e9cdbc8",
            "name": "teste",
            "description": "string",
            "resourceURI": "string",
            "comics": "5f449d544d88151a5e9cdbc7",
            "modified": "2020-08-25T05:11:30.429Z",
            "__v": 0
        }

        nock('http://localhost:3000/v1/public/characters/name')
            .get('/teste')
            .reply(200, response);
    });

    it('deve buscar o character com nome correto', async () => {
        const expected = { name: 'teste' };
        const nomeBase = 'teste';

        const resultado = await getByName(nomeBase);
        assert.deepEqual(resultado, expected);
    });
});