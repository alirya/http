import PreconditionRequiredParameters from "../../../dist/response/precondition-required-parameters";
import PreconditionRequiredParameter from "../../../dist/response/precondition-required-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = PreconditionRequiredParameter({
            body,
            message,
            headers
        });

        let parameters = PreconditionRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


