import MultipleChoiceParameters from '../../../dist/response/multiple-choice-parameters';
import MultipleChoiceParameter from '../../../dist/response/multiple-choice-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = MultipleChoiceParameter({
            body,
            message,
            headers
        });

        let parameters = MultipleChoiceParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


