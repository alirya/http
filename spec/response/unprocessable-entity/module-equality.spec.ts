import {UnprocessableEntityParameter, UnprocessableEntityParameters} from '../../../dist/response/unprocessable-entity.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = UnprocessableEntityParameter({
            body,
            message,
            headers
        });

        let parameters = UnprocessableEntityParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


