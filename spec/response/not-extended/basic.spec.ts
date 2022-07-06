import NotExtended from '../../../dist/response/not-extended.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = NotExtended.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(510);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = NotExtended.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(510);
        expect(response.message).toBe(Standard(510));

    });

    it('auto message', function() {

        let response = NotExtended.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(510);
        expect(response.message).toBe(Standard(510));

    });

    it('body only', function() {

        let response = NotExtended.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(510);
        expect(response.message).toBe(Standard(510));

    });
});


