import EarlyHintsParameters from "../../../dist/response/early-hints-parameters";
import EarlyHintsParameter from "../../../dist/response/early-hints-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = EarlyHintsParameter({
            body,
            message,
            headers
        });

        let parameters = EarlyHintsParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


