import {ForbiddenParameter, ForbiddenParameters} from '../../../dist/response/forbidden';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = ForbiddenParameter({
            body,
            message,
            headers
        });

        let parameters = ForbiddenParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


