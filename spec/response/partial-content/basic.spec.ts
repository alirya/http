import PartialContent from '../../../dist/response/partial-content.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = PartialContent.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(206);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = PartialContent.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(206);
        expect(response.message).toBe(Standard(206));

    });

    it('auto message', function() {

        let response = PartialContent.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(206);
        expect(response.message).toBe(Standard(206));

    });

    it('body only', function() {

        let response = PartialContent.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(206);
        expect(response.message).toBe(Standard(206));

    });
});


