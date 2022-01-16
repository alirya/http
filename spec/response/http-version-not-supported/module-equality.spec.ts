import HttpVersionNotSupportedParameters from "../../../dist/response/http-version-nosupported-parameters";
import HttpVersionNotSupportedParameter from "../../../dist/response/http-version-nosupported-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = HttpVersionNotSupportedParameter({
            body,
            message,
            headers
        });

        let parameters = HttpVersionNotSupportedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


