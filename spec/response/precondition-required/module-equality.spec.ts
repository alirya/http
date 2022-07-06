import {PreconditionRequiredParameter, PreconditionRequiredParameters} from '../../../dist/response/precondition-required.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = PreconditionRequiredParameter({
            body,
            message,
            headers
        });

        let parameters = PreconditionRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


