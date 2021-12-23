import BadRequestParameters from "../../../dist/response/bad-request-parameters";
import BadRequestParameter from "../../../dist/response/bad-request-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = BadRequestParameter({
            body,
            message,
            headers
        });

        let parameters = BadRequestParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


