import TooEarly from '../../../dist/response/too-early.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        const response = TooEarly.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(425);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        const response = TooEarly.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.status).toBe(425);
        expect(response.message).toBe(Standard(425));

    });

    it('auto message', function() {

        const response = TooEarly.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(425);
        expect(response.message).toBe(Standard(425));

    });

    it('body only', function() {

        const response = TooEarly.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.status).toBe(425);
        expect(response.message).toBe(Standard(425));

    });
});


