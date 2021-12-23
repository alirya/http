import UriTooLongParameters from "../../../dist/response/uri-too-long-parameters";
import UriTooLongParameter from "../../../dist/response/uri-too-long-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = UriTooLongParameter({
            body,
            message,
            headers
        });

        let parameters = UriTooLongParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


