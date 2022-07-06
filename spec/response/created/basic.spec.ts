import Created from '../../../dist/response/created.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = Created.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(201);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = Created.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(201);
        expect(response.message).toBe(Standard(201));

    });

    it('auto message', function() {

        let response = Created.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(201);
        expect(response.message).toBe(Standard(201));

    });

    it('body only', function() {

        let response = Created.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(201);
        expect(response.message).toBe(Standard(201));

    });
});


