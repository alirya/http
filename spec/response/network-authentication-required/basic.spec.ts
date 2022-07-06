import NetworkAuthenticationRequired from '../../../dist/response/network-authentication-required.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = NetworkAuthenticationRequired.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(511);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = NetworkAuthenticationRequired.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(511);
        expect(response.message).toBe(Standard(511));

    });

    it('auto message', function() {

        let response = NetworkAuthenticationRequired.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(511);
        expect(response.message).toBe(Standard(511));

    });

    it('body only', function() {

        let response = NetworkAuthenticationRequired.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(511);
        expect(response.message).toBe(Standard(511));

    });
});


