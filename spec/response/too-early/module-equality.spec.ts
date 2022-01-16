import TooEarlyParameters from '../../../dist/response/too-early-parameters';
import TooEarlyParameter from '../../../dist/response/too-early-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = TooEarlyParameter({
            body,
            message,
            headers
        });

        let parameters = TooEarlyParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


