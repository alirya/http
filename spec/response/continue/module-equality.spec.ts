import ContinueParameters from '../../../dist/response/continue-parameters';
import ContinueParameter from '../../../dist/response/continue-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = ContinueParameter({
            body,
            message,
            headers
        });

        let parameters = ContinueParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


