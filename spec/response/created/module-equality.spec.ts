import {CreatedParameter, CreatedParameters} from '../../../dist/response/created.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = CreatedParameter({
            body,
            message,
            headers
        });

        const parameters = CreatedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


