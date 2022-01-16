import UpgradeRequired from '../../../dist/response/upgrade-required-parameter';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('header', function() {

        let response = UpgradeRequired({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(426);
        expect(response.message).toBe(Standard(426));

    });

    it('header', function() {

        let response = UpgradeRequired({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(426);
        expect(response.message).toBe(Standard(426));

    });
});


