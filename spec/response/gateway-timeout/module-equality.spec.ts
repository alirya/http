import {GatewayTimeoutParameter, GatewayTimeoutParameters} from '../../../dist/response/gateway-timeout';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = GatewayTimeoutParameter({
            body,
            message,
            headers
        });

        let parameters = GatewayTimeoutParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


