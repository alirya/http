import {BadRequestParameter, BadRequestParameters} from '../../../dist/response/bad-request.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = BadRequestParameter({
            body,
            message,
            headers
        });

        const parameters = BadRequestParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


