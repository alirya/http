import {AcceptedParameter, AcceptedParameters} from '../../../dist/response/accepted.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = AcceptedParameter({
            body,
            message,
            headers
        });

        const parameters = AcceptedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


