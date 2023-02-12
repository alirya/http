import UnprocessableEntity from '../../../dist/response/unprocessable-entity.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        const response = UnprocessableEntity.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(422);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        const response = UnprocessableEntity.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.status).toBe(422);
        expect(response.message).toBe(Standard(422));

    });

    it('auto message', function() {

        const response = UnprocessableEntity.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(422);
        expect(response.message).toBe(Standard(422));

    });

    it('body only', function() {

        const response = UnprocessableEntity.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.status).toBe(422);
        expect(response.message).toBe(Standard(422));

    });
});


