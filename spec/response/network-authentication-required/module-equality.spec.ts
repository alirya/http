import {NetworkAuthenticationRequiredParameter, NetworkAuthenticationRequiredParameters} from '../../../dist/response/network-authentication-required';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = NetworkAuthenticationRequiredParameter({
            body,
            message,
            headers
        });

        let parameters = NetworkAuthenticationRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


