import {EarlyHintsParameter, EarlyHintsParameters} from '../../../dist/response/early-hints.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = EarlyHintsParameter({
            body,
            message,
            headers
        });

        const parameters = EarlyHintsParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


