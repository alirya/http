import Forbidden from '../../../dist/response/forbidden.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        const response = Forbidden.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(403);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        const response = Forbidden.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.status).toBe(403);
        expect(response.message).toBe(Standard(403));

    });

    it('auto message', function() {

        const response = Forbidden.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(403);
        expect(response.message).toBe(Standard(403));

    });

    it('body only', function() {

        const response = Forbidden.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.status).toBe(403);
        expect(response.message).toBe(Standard(403));

    });
});


