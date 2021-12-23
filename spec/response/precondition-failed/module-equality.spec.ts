import PreconditionFailedParameters from "../../../dist/response/precondition-failed-parameters";
import PreconditionFailedParameter from "../../../dist/response/precondition-failed-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = PreconditionFailedParameter({
            body,
            message,
            headers
        });

        let parameters = PreconditionFailedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


