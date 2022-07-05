import Unused from '../../../dist/response/unused';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = Unused.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(306);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = Unused.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(306);
        expect(response.message).toBe(Standard(306));

    });

    it('auto message', function() {

        let response = Unused.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(306);
        expect(response.message).toBe(Standard(306));

    });

    it('body only', function() {

        let response = Unused.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(306);
        expect(response.message).toBe(Standard(306));

    });
});


