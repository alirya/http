import {MovedPermanentlyParameter, MovedPermanentlyParameters} from '../../../dist/response/moved-permanently';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = MovedPermanentlyParameter({
            body,
            message,
            headers
        });

        let parameters = MovedPermanentlyParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


