import Continue from '../../../dist/response/continue';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = Continue.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(100);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = Continue.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(100);
        expect(response.message).toBe(Standard(100));

    });

    it('auto message', function() {

        let response = Continue.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(100);
        expect(response.message).toBe(Standard(100));

    });

    it('body only', function() {

        let response = Continue.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(100);
        expect(response.message).toBe(Standard(100));

    });
});


