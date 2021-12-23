import ServiceUnavailableParameters from "../../../dist/response/service-unavailable-parameters";
import ServiceUnavailableParameter from "../../../dist/response/service-unavailable-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = ServiceUnavailableParameter({
            body,
            message,
            headers
        });

        let parameters = ServiceUnavailableParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


