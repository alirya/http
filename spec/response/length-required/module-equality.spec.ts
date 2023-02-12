import {LengthRequiredParameter, LengthRequiredParameters} from '../../../dist/response/length-required.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = LengthRequiredParameter({
            body,
            message,
            headers
        });

        const parameters = LengthRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


