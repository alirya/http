import {HttpVersionNotSupportedParameter, HttpVersionNotSupportedParameters} from '../../../dist/response/http-version-not-supported.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = HttpVersionNotSupportedParameter({
            body,
            message,
            headers
        });

        const parameters = HttpVersionNotSupportedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


