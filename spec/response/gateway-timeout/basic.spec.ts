import GatewayTimeout from '../../../dist/response/gateway-timeout-parameter';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('header', function() {

        let response = GatewayTimeout({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(504);
        expect(response.message).toBe(Standard(504));

    });

    it('header', function() {

        let response = GatewayTimeout({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(504);
        expect(response.message).toBe(Standard(504));

    });
});


