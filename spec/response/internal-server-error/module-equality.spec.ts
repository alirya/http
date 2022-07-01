import {InternalServerErrorParameter, InternalServerErrorParameters} from '../../../dist/response/internal-server-error';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = InternalServerErrorParameter({
            body,
            message,
            headers
        });

        let parameters = InternalServerErrorParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


