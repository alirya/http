import {TooManyRequestsParameter, TooManyRequestsParameters} from '../../../dist/response/too-many-requests.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = TooManyRequestsParameter({
            body,
            message,
            headers
        });

        const parameters = TooManyRequestsParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


