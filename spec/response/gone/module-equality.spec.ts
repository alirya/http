import {GoneParameter, GoneParameters} from '../../../dist/response/gone.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = GoneParameter({
            body,
            message,
            headers
        });

        const parameters = GoneParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


