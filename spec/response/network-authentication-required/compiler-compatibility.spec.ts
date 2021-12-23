import NetworkAuthenticationRequiredParameter from "../../../dist/response/network-authentication-required-parameter";
import NetworkAuthenticationRequiredParameters from "../../../dist/response/network-authentication-required-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("header", function() {

    describe("parameter", function() {

        let response = NetworkAuthenticationRequiredParameter({
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

        let response = NetworkAuthenticationRequiredParameters(undefined, {etag:'etag data'});


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

        let response = NetworkAuthenticationRequiredParameter({
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

        let response = NetworkAuthenticationRequiredParameters(undefined, undefined, 'data');

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

