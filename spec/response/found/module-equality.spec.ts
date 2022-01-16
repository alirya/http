import FoundParameters from '../../../dist/response/found-parameters';
import FoundParameter from '../../../dist/response/found-parameter';

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


