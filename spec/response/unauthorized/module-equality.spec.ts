import {UnauthorizedParameter, UnauthorizedParameters} from '../../../dist/response/unauthorized.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = UnauthorizedParameter({
            body,
            message,
            headers
        });

        const parameters = UnauthorizedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


