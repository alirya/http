import {UnprocessableEntityParameter, UnprocessableEntityParameters} from '../../../dist/response/unprocessable-entity.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = UnprocessableEntityParameter({
            body,
            message,
            headers
        });

        const parameters = UnprocessableEntityParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


