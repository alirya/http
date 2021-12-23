import LengthRequiredParameters from "../../../dist/response/length-required-parameters";
import LengthRequiredParameter from "../../../dist/response/length-required-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = LengthRequiredParameter({
            body,
            message,
            headers
        });

        let parameters = LengthRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


