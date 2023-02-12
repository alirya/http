import RequestHeaderFieldsTooLarge from '../../../dist/response/request-header-fields-too-large.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        const response = RequestHeaderFieldsTooLarge.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(431);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        const response = RequestHeaderFieldsTooLarge.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.status).toBe(431);
        expect(response.message).toBe(Standard(431));

    });

    it('auto message', function() {

        const response = RequestHeaderFieldsTooLarge.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(431);
        expect(response.message).toBe(Standard(431));

    });

    it('body only', function() {

        const response = RequestHeaderFieldsTooLarge.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.status).toBe(431);
        expect(response.message).toBe(Standard(431));

    });
});


