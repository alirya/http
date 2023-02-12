import {MisdirectedRequestParameter, MisdirectedRequestParameters} from '../../../dist/response/misdirected-request.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = MisdirectedRequestParameter({
            body,
            message,
            headers
        });

        const parameters = MisdirectedRequestParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


