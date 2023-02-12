import {MultipleChoiceParameter, MultipleChoiceParameters} from '../../../dist/response/multiple-choice.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = MultipleChoiceParameter({
            body,
            message,
            headers
        });

        const parameters = MultipleChoiceParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


