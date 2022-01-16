import PermanentRedirectParameters from '../../../dist/response/permanent-redirect-parameters';
import PermanentRedirectParameter from '../../../dist/response/permanent-redirect-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = PermanentRedirectParameter({
            body,
            message,
            headers
        });

        let parameters = PermanentRedirectParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


