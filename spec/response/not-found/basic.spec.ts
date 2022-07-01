import NotFound from '../../../dist/response/not-found';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = NotFound.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(404);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = NotFound.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(404);
        expect(response.message).toBe(Standard(404));

    });

    it('auto message', function() {

        let response = NotFound.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(404);
        expect(response.message).toBe(Standard(404));

    });

    it('body only', function() {

        let response = NotFound.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(404);
        expect(response.message).toBe(Standard(404));

    });
});


