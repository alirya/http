import {GatewayTimeoutParameter, GatewayTimeoutParameters} from '../../../dist/response/gateway-timeout.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = GatewayTimeoutParameter({
            body,
            message,
            headers
        });

        const parameters = GatewayTimeoutParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


