import Accepted from '../../../dist/response/accepted.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        const response = Accepted.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(202);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        const response = Accepted.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.status).toBe(202);
        expect(response.message).toBe(Standard(202));

    });

    it('auto message', function() {

        const response = Accepted.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(202);
        expect(response.message).toBe(Standard(202));

    });

    it('body only', function() {

        const response = Accepted.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.status).toBe(202);
        expect(response.message).toBe(Standard(202));

    });
});


