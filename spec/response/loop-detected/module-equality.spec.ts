import {LoopDetectedParameter, LoopDetectedParameters} from '../../../dist/response/loop-detected.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = LoopDetectedParameter({
            body,
            message,
            headers
        });

        const parameters = LoopDetectedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


