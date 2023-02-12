import {TooEarlyParameter, TooEarlyParameters} from '../../../dist/response/too-early.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = TooEarlyParameter({
            body,
            message,
            headers
        });

        const parameters = TooEarlyParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


