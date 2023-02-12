import {UriTooLongParameter, UriTooLongParameters} from '../../../dist/response/uri-too-long.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = UriTooLongParameter({
            body,
            message,
            headers
        });

        const parameters = UriTooLongParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


