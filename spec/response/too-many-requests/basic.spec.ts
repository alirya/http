import TooManyRequests from '../../../dist/response/too-many-requests';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = TooManyRequests.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(429);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = TooManyRequests.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(429);
        expect(response.message).toBe(Standard(429));

    });

    it('auto message', function() {

        let response = TooManyRequests.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(429);
        expect(response.message).toBe(Standard(429));

    });

    it('body only', function() {

        let response = TooManyRequests.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(429);
        expect(response.message).toBe(Standard(429));

    });
});


