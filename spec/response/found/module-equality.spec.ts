import {FoundParameter, FoundParameters} from '../../../dist/response/found';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = FoundParameter({
            body,
            message,
            headers
        });

        let parameters = FoundParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


