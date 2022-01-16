import NotModified from '../../../dist/response/nomodified-parameter';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('header', function() {

        let response = NotModified({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(304);
        expect(response.message).toBe(Standard(304));

    });

    it('header', function() {

        let response = NotModified({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(304);
        expect(response.message).toBe(Standard(304));

    });
});


