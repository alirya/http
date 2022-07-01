import {RequestTimeoutParameter, RequestTimeoutParameters} from '../../../dist/response/request-timeout';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = RequestTimeoutParameter({
            body,
            message,
            headers
        });

        let parameters = RequestTimeoutParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


