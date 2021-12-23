import UnauthorizedParameter from "../../../dist/response/unauthorized-parameter";
import UnauthorizedParameters from "../../../dist/response/unauthorized-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("empty", function() {

    describe("parameter", function() {

        let response = UnauthorizedParameter();

        let string : string;
        let number : number;
        let undef : undefined;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;

        number = response.code;
        string = response.message;

    });

    describe("parameters", function() {

        let response = UnauthorizedParameters();


        let string : string;
        let number : number;
        let undef : undefined;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;

        number = response.code;
        string = response.message;

    });

});


describe("header", function() {

    describe("parameter", function() {

        let response = UnauthorizedParameter({
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

    describe("parameters", function() {

        let response = UnauthorizedParameters(undefined, {etag:'etag data'});


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

describe("message", function() {

    describe("parameter", function() {

        let response = UnauthorizedParameter({
            message: 'etag data'
        });

        let string : string;
        let number : number;
        let undef : undefined;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;

        number = response.code;
        string = response.message;

    });

    describe("parameters", function() {

        let response = UnauthorizedParameters('etag data');

        let string : string;
        let number : number;
        let undef : undefined;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;

        number = response.code;
        string = response.message;

    });

});

describe("body", function() {

    describe("parameter", function() {

        let response = UnauthorizedParameter({
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

    describe("parameters", function() {

        let response = UnauthorizedParameters(undefined, undefined, 'data');

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

