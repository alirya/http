import {InsufficientStorageParameter, InsufficientStorageParameters} from '../../../dist/response/insufficient-storage.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = InsufficientStorageParameter({
            body,
            message,
            headers
        });

        const parameters = InsufficientStorageParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


