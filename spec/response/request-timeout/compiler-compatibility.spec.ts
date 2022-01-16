import RequestTimeoutParameter from '../../../dist/response/request-timeout-parameter';
import RequestTimeoutParameters from '../../../dist/response/request-timeout-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('empty', function() {

    describe('parameter', function() {

        let response = RequestTimeoutParameter();

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expecerror
        string = response.headers.etag;

        // @ts-expecerror
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

    describe('parameters', function() {

        let response = RequestTimeoutParameters();


        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expecerror
        string = response.headers.etag;

        // @ts-expecerror
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

});


describe('header', function() {

    describe('parameter', function() {

        let response = RequestTimeoutParameter({
            headers:{etag:'etag data'}
        });

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        string = response.headers.etag;

        // @ts-expecerror
        string = response.body;
        // @ts-expecerror
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

    describe('parameters', function() {

        let response = RequestTimeoutParameters(undefined, {etag:'etag data'});


        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        string = response.headers.etag;

        // @ts-expecerror
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

});

describe('message', function() {

    describe('parameter', function() {

        let response = RequestTimeoutParameter({
            message: 'etag data'
        });

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expecerror
        string = response.headers.etag;

        // @ts-expecerror
        string = response.body;
        // @ts-expecerror
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

    describe('parameters', function() {

        let response = RequestTimeoutParameters('etag data');

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expecerror
        string = response.headers.etag;

        // @ts-expecerror
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

});

describe('body', function() {

    describe('parameter', function() {

        let response = RequestTimeoutParameter({
            body:'data',
        });

        let record : Record<string, string>;
        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expecerror
        string = response.headers.etag;

        // @ts-expecerror
        number = response.headers;
        // @ts-expecerror
        string = response.headers;
        // @ts-expecerror
        undef = response.headers;
        record = response.headers;

        string = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;
    });

    describe('parameters', function() {

        let response = RequestTimeoutParameters(undefined, undefined, 'data');

        let record : Record<string, string>;
        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expecerror
        string = response.headers.etag;

        // @ts-expecerror
        number = response.headers;
        // @ts-expecerror
        string = response.headers;
        // @ts-expecerror
        undef = response.headers;
        record = response.headers;

        string = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

});

