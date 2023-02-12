import {NotImplementedParameter, NotImplementedParameters} from '../../../dist/response/not-implemented.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = NotImplementedParameter({
            body,
            message,
            headers
        });

        const parameters = NotImplementedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


