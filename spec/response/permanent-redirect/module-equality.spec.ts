import PermanentRedirectParameters from '../../../dist/response/permanenredirecparameters';
import PermanentRedirectParameter from '../../../dist/response/permanenredirecparameter';

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


