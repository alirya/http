import {NotModifiedParameter, NotModifiedParameters} from '../../../dist/response/not-modified.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = NotModifiedParameter({
            body,
            message,
            headers
        });

        let parameters = NotModifiedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


