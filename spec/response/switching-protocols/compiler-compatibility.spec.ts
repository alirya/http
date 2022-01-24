import SwitchingProtocolsParameter from '../../../dist/response/switching-protocols-parameter';
import SwitchingProtocolsParameters from '../../../dist/response/switching-protocols-parameters';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('header', function() {

    it('parameter', function() {

        let response = SwitchingProtocolsParameter({
            headers:{etag:'etag data'}
        });

        let string : string;
        let number : number;
        let undef : undefined;

        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;

        number = response.code;
        string = response.message;

    });

    it('parameters', function() {

        let response = SwitchingProtocolsParameters(undefined, {etag:'etag data'});


        let string : string;
        let number : number;
        let undef : undefined;

        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;

        number = response.code;
        string = response.message;

    });

});

describe('body', function() {

    it('parameter', function() {

        let response = SwitchingProtocolsParameter({
            body:'data',
        });

        let record : Record<string, string>;
        let string : string;
        let number : number;
        let undef : undefined;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        number = response.headers;
        // @ts-expect-error
        string = response.headers;
        // @ts-expect-error
        undef = response.headers;
        record = response.headers;

        string = response.body;

        number = response.code;
        string = response.message;
    });

    it('parameters', function() {

        let response = SwitchingProtocolsParameters(undefined, undefined, 'data');

        let record : Record<string, string>;
        let string : string;
        let number : number;
        let undef : undefined;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        number = response.headers;
        // @ts-expect-error
        string = response.headers;
        // @ts-expect-error
        undef = response.headers;
        record = response.headers;

        string = response.body;

        number = response.code;
        string = response.message;

    });

});

