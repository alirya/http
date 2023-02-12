import {ContinueParameter, ContinueParameters} from '../../../dist/response/continue.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = ContinueParameter({
            body,
            message,
            headers
        });

        const parameters = ContinueParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


