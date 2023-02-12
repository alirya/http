import {NonauthoritativeInformationParameter, NonauthoritativeInformationParameters} from '../../../dist/response/nonauthoritative-information.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = NonauthoritativeInformationParameter({
            body,
            message,
            headers
        });

        const parameters = NonauthoritativeInformationParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


