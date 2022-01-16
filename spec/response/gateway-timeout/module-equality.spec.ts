import GatewayTimeoutParameters from '../../../dist/response/gateway-timeouparameters';
import GatewayTimeoutParameter from '../../../dist/response/gateway-timeouparameter';

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


