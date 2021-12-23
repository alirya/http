import TooManyRequestsParameters from "../../../dist/response/too-many-requests-parameters";
import TooManyRequestsParameter from "../../../dist/response/too-many-requests-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = TooManyRequestsParameter({
            body,
            message,
            headers
        });

        let parameters = TooManyRequestsParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


