import TemporaryRedirectParameters from '../../../dist/response/temporary-redirecparameters';
import TemporaryRedirectParameter from '../../../dist/response/temporary-redirecparameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = TemporaryRedirectParameter({
            body,
            message,
            headers
        });

        let parameters = TemporaryRedirectParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


