import GoneParameters from '../../../dist/response/gone-parameters';
import GoneParameter from '../../../dist/response/gone-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = GoneParameter({
            body,
            message,
            headers
        });

        let parameters = GoneParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


