import GoneParameter from "../../../dist/response/gone-parameter";
import GoneParameters from "../../../dist/response/gone-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("header", function() {

    describe("parameter", function() {

        let response = GoneParameter({
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

        let response = GoneParameters(undefined, {etag:'etag data'});


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

describe("body", function() {

    describe("parameter", function() {

        let response = GoneParameter({
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

        let response = GoneParameters(undefined, undefined, 'data');

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

