import UseProxyParameters from '../../../dist/response/use-proxy-parameters';
import UseProxyParameter from '../../../dist/response/use-proxy-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = UseProxyParameter({
            body,
            message,
            headers
        });

        let parameters = UseProxyParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


