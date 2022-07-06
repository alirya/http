import {PartialContentParameter, PartialContentParameters} from '../../../dist/response/partial-content.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = PartialContentParameter({
            body,
            message,
            headers
        });

        let parameters = PartialContentParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


