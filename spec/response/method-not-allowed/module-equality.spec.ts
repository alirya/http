import MethodNotAllowedParameters from "../../../dist/response/method-noallowed-parameters";
import MethodNotAllowedParameter from "../../../dist/response/method-noallowed-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = MethodNotAllowedParameter({
            body,
            message,
            headers
        });

        let parameters = MethodNotAllowedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


