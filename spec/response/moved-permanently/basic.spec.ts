import MovedPermanently from '../../../dist/response/moved-permanently.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = MovedPermanently.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(301);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = MovedPermanently.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(301);
        expect(response.message).toBe(Standard(301));

    });

    it('auto message', function() {

        let response = MovedPermanently.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(301);
        expect(response.message).toBe(Standard(301));

    });

    it('body only', function() {

        let response = MovedPermanently.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(301);
        expect(response.message).toBe(Standard(301));

    });
});


