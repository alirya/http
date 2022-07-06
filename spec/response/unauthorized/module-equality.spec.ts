import {UnauthorizedParameter, UnauthorizedParameters} from '../../../dist/response/unauthorized.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = UnauthorizedParameter({
            body,
            message,
            headers
        });

        let parameters = UnauthorizedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


