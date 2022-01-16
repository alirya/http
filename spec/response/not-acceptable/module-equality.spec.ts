import NotAcceptableParameters from '../../../dist/response/noacceptable-parameters';
import NotAcceptableParameter from '../../../dist/response/noacceptable-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = NotAcceptableParameter({
            body,
            message,
            headers
        });

        let parameters = NotAcceptableParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


