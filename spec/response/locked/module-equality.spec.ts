import {LockedParameter, LockedParameters} from '../../../dist/response/locked.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = LockedParameter({
            body,
            message,
            headers
        });

        let parameters = LockedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


