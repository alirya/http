import {LockedParameter, LockedParameters} from '../../../dist/response/locked.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = LockedParameter({
            body,
            message,
            headers
        });

        const parameters = LockedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


