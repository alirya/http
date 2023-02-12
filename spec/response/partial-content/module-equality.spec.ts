import {PartialContentParameter, PartialContentParameters} from '../../../dist/response/partial-content.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = PartialContentParameter({
            body,
            message,
            headers
        });

        const parameters = PartialContentParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


