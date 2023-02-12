import {ImATeapotParameter, ImATeapotParameters} from '../../../dist/response/im-a-teapot.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = ImATeapotParameter({
            body,
            message,
            headers
        });

        const parameters = ImATeapotParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


