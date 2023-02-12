import UnsupportedMediaType from '../../../dist/response/unsupported-media-type.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        const response = UnsupportedMediaType.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(415);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        const response = UnsupportedMediaType.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.status).toBe(415);
        expect(response.message).toBe(Standard(415));

    });

    it('auto message', function() {

        const response = UnsupportedMediaType.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(415);
        expect(response.message).toBe(Standard(415));

    });

    it('body only', function() {

        const response = UnsupportedMediaType.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.status).toBe(415);
        expect(response.message).toBe(Standard(415));

    });
});


