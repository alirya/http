import AcceptedParameters from '../../../dist/response/accepted-parameters';
import AcceptedParameter from '../../../dist/response/accepted-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = AcceptedParameter({
            body,
            message,
            headers
        });

        let parameters = AcceptedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


