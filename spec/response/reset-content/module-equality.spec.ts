import {ResetContentParameter, ResetContentParameters} from '../../../dist/response/reset-content.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = ResetContentParameter({
            body,
            message,
            headers
        });

        const parameters = ResetContentParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


