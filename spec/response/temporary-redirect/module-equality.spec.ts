import {TemporaryRedirectParameter, TemporaryRedirectParameters} from '../../../dist/response/temporary-redirect.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = TemporaryRedirectParameter({
            body,
            message,
            headers
        });

        const parameters = TemporaryRedirectParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


