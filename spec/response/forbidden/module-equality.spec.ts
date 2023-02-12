import {ForbiddenParameter, ForbiddenParameters} from '../../../dist/response/forbidden.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = ForbiddenParameter({
            body,
            message,
            headers
        });

        const parameters = ForbiddenParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


