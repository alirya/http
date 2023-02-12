import {ExpectationFailedParameter, ExpectationFailedParameters} from '../../../dist/response/expectation-failed.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = ExpectationFailedParameter({
            body,
            message,
            headers
        });

        const parameters = ExpectationFailedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


