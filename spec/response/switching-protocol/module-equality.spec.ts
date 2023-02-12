import {SwitchingProtocolParameter, SwitchingProtocolParameters} from '../../../dist/response/switching-protocol.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = SwitchingProtocolParameter({
            body,
            message,
            headers
        });

        const parameters = SwitchingProtocolParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


