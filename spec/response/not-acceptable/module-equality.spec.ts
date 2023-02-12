import {NotAcceptableParameter, NotAcceptableParameters} from '../../../dist/response/not-acceptable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = NotAcceptableParameter({
            body,
            message,
            headers
        });

        const parameters = NotAcceptableParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


