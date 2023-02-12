import {NotFoundParameter, NotFoundParameters} from '../../../dist/response/not-found.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = NotFoundParameter({
            body,
            message,
            headers
        });

        const parameters = NotFoundParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


