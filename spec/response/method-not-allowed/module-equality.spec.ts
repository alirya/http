import {MethodNotAllowedParameter, MethodNotAllowedParameters} from '../../../dist/response/method-not-allowed.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = MethodNotAllowedParameter({
            body,
            message,
            headers
        });

        const parameters = MethodNotAllowedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


