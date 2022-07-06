import {CreatedParameter, CreatedParameters} from '../../../dist/response/created.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = CreatedParameter({
            body,
            message,
            headers
        });

        let parameters = CreatedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


