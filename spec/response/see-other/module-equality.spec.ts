import {SeeOtherParameter, SeeOtherParameters} from '../../../dist/response/see-other';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = SeeOtherParameter({
            body,
            message,
            headers
        });

        let parameters = SeeOtherParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


