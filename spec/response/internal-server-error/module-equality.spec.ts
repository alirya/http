import {InternalServerErrorParameter, InternalServerErrorParameters} from '../../../dist/response/internal-server-error.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = InternalServerErrorParameter({
            body,
            message,
            headers
        });

        const parameters = InternalServerErrorParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


