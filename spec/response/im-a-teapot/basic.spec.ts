import ImATeapot from '../../../dist/response/im-a-teapot.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = ImATeapot.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(418);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = ImATeapot.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(418);
        expect(response.message).toBe(Standard(418));

    });

    it('auto message', function() {

        let response = ImATeapot.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(418);
        expect(response.message).toBe(Standard(418));

    });

    it('body only', function() {

        let response = ImATeapot.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(418);
        expect(response.message).toBe(Standard(418));

    });
});


