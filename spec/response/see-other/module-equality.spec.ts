import {SeeOtherParameter, SeeOtherParameters} from '../../../dist/response/see-other.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = SeeOtherParameter({
            body,
            message,
            headers
        });

        const parameters = SeeOtherParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


