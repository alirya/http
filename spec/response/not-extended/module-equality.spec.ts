import {NotExtendedParameter, NotExtendedParameters} from '../../../dist/response/not-extended.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = NotExtendedParameter({
            body,
            message,
            headers
        });

        const parameters = NotExtendedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


