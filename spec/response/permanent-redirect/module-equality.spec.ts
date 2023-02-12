import {PermanentRedirectParameter, PermanentRedirectParameters} from '../../../dist/response/permanent-redirect.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = PermanentRedirectParameter({
            body,
            message,
            headers
        });

        const parameters = PermanentRedirectParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


