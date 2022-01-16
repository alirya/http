import InsufficientStorageParameters from '../../../dist/response/insufficient-storage-parameters';
import InsufficientStorageParameter from '../../../dist/response/insufficient-storage-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = InsufficientStorageParameter({
            body,
            message,
            headers
        });

        let parameters = InsufficientStorageParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


