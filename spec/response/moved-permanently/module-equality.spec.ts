import {MovedPermanentlyParameter, MovedPermanentlyParameters} from '../../../dist/response/moved-permanently.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = MovedPermanentlyParameter({
            body,
            message,
            headers
        });

        const parameters = MovedPermanentlyParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


