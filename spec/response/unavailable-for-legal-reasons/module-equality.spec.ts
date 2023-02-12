import {UnavailableForLegalReasonsParameter, UnavailableForLegalReasonsParameters} from '../../../dist/response/unavailable-for-legal-reasons.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = UnavailableForLegalReasonsParameter({
            body,
            message,
            headers
        });

        const parameters = UnavailableForLegalReasonsParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


