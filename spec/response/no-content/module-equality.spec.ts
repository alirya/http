import {NoContentParameter, NoContentParameters} from '../../../dist/response/no-content.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = NoContentParameter({
            body,
            message,
            headers
        });

        const parameters = NoContentParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


