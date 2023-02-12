import {UnusedParameter, UnusedParameters} from '../../../dist/response/unused.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = UnusedParameter({
            body,
            message,
            headers
        });

        const parameters = UnusedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


