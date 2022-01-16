import HttpVersionNotSupportedParameter from "../../../dist/response/http-version-nosupported-parameter";
import HttpVersionNotSupportedParameters from "../../../dist/response/http-version-nosupported-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("empty", function() {

    describe("parameter", function() {

        let response = HttpVersionNotSupportedParameter();

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

    describe("parameters", function() {

        let response = HttpVersionNotSupportedParameters();


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


describe("header", function() {

    describe("parameter", function() {

        let response = HttpVersionNotSupportedParameter({
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

    describe("parameters", function() {

        let response = HttpVersionNotSupportedParameters(undefined, {etag:'etag data'});


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

describe("message", function() {

    describe("parameter", function() {

        let response = HttpVersionNotSupportedParameter({
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

    describe("parameters", function() {

        let response = HttpVersionNotSupportedParameters('etag data');

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

describe("body", function() {

    describe("parameter", function() {

        let response = HttpVersionNotSupportedParameter({
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

    describe("parameters", function() {

        let response = HttpVersionNotSupportedParameters(undefined, undefined, 'data');

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

