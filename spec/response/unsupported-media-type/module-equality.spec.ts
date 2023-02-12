import {UnsupportedMediaTypeParameter, UnsupportedMediaTypeParameters} from '../../../dist/response/unsupported-media-type.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = UnsupportedMediaTypeParameter({
            body,
            message,
            headers
        });

        const parameters = UnsupportedMediaTypeParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


