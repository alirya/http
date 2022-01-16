import LockedParameters from '../../../dist/response/locked-parameters';
import LockedParameter from '../../../dist/response/locked-parameter';

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


