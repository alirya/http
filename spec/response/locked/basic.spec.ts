import Locked from '../../../dist/response/locked.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        const response = Locked.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(423);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        const response = Locked.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.status).toBe(423);
        expect(response.message).toBe(Standard(423));

    });

    it('auto message', function() {

        const response = Locked.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(423);
        expect(response.message).toBe(Standard(423));

    });

    it('body only', function() {

        const response = Locked.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.status).toBe(423);
        expect(response.message).toBe(Standard(423));

    });
});


