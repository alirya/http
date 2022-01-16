import SwitchingProtocolsParameters from '../../../dist/response/switching-protocols-parameters';
import SwitchingProtocolsParameter from '../../../dist/response/switching-protocols-parameter';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = SwitchingProtocolsParameter({
            body,
            message,
            headers
        });

        let parameters = SwitchingProtocolsParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


