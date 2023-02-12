import {VariantAlsoNegotiatesParameter, VariantAlsoNegotiatesParameters} from '../../../dist/response/variant-also-negotiates.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = VariantAlsoNegotiatesParameter({
            body,
            message,
            headers
        });

        const parameters = VariantAlsoNegotiatesParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


