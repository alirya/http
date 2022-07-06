import {RequestHeaderFieldsTooLargeParameter, RequestHeaderFieldsTooLargeParameters} from '../../../dist/response/request-header-fields-too-large.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = RequestHeaderFieldsTooLargeParameter({
            body,
            message,
            headers
        });

        let parameters = RequestHeaderFieldsTooLargeParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


