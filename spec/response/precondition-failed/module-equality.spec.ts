import {PreconditionFailedParameter, PreconditionFailedParameters} from '../../../dist/response/precondition-failed.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = PreconditionFailedParameter({
            body,
            message,
            headers
        });

        const parameters = PreconditionFailedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


