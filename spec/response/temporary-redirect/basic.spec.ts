import TemporaryRedirect from '../../../dist/response/temporary-redirect.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        const response = TemporaryRedirect.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(307);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        const response = TemporaryRedirect.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.status).toBe(307);
        expect(response.message).toBe(Standard(307));

    });

    it('auto message', function() {

        const response = TemporaryRedirect.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(307);
        expect(response.message).toBe(Standard(307));

    });

    it('body only', function() {

        const response = TemporaryRedirect.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.status).toBe(307);
        expect(response.message).toBe(Standard(307));

    });
});


