import {NotModifiedParameter, NotModifiedParameters} from '../../../dist/response/not-modified.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = NotModifiedParameter({
            body,
            message,
            headers
        });

        const parameters = NotModifiedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


