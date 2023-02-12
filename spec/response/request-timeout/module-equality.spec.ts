import {RequestTimeoutParameter, RequestTimeoutParameters} from '../../../dist/response/request-timeout.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = RequestTimeoutParameter({
            body,
            message,
            headers
        });

        const parameters = RequestTimeoutParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


