import {ProxyAuthenticationRequiredParameter, ProxyAuthenticationRequiredParameters} from '../../../dist/response/proxy-authentication-required.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = ProxyAuthenticationRequiredParameter({
            body,
            message,
            headers
        });

        const parameters = ProxyAuthenticationRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


