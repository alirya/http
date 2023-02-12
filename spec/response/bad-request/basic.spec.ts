import BadRequest from '../../../dist/response/bad-request.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        const response = BadRequest.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(400);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        const response = BadRequest.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.status).toBe(400);
        expect(response.message).toBe(Standard(400));

    });

    it('auto message', function() {

        const response = BadRequest.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(400);
        expect(response.message).toBe(Standard(400));

    });

    it('body only', function() {

        const response = BadRequest.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.status).toBe(400);
        expect(response.message).toBe(Standard(400));

    });
});


