import {FoundParameter, FoundParameters} from '../../../dist/response/found.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = FoundParameter({
            body,
            message,
            headers
        });

        const parameters = FoundParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


