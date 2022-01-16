import PayloadTooLargeParameters from '../../../dist/response/payload-too-large-parameters';
import PayloadTooLargeParameter from '../../../dist/response/payload-too-large-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = PayloadTooLargeParameter({
            body,
            message,
            headers
        });

        let parameters = PayloadTooLargeParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


