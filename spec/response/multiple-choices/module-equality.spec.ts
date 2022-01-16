import MultipleChoicesParameters from '../../../dist/response/multiple-choices-parameters';
import MultipleChoicesParameter from '../../../dist/response/multiple-choices-parameter';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = MultipleChoicesParameter({
            body,
            message,
            headers
        });

        let parameters = MultipleChoicesParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


