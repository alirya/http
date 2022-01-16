import PayloadTooLarge from '../../../dist/response/payload-too-large-parameter';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('header', function() {

        let response = PayloadTooLarge({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(413);
        expect(response.message).toBe(Standard(413));

    });

    it('header', function() {

        let response = PayloadTooLarge({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(413);
        expect(response.message).toBe(Standard(413));

    });
});


