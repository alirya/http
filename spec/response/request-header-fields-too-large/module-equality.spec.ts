import {RequestHeaderFieldsTooLargeParameter, RequestHeaderFieldsTooLargeParameters} from '../../../dist/response/request-header-fields-too-large.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = RequestHeaderFieldsTooLargeParameter({
            body,
            message,
            headers
        });

        const parameters = RequestHeaderFieldsTooLargeParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


