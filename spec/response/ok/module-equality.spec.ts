import OkParameters from "../../../dist/response/ok-parameters";
import OkParameter from "../../../dist/response/ok-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = OkParameter({
            body,
            message,
            headers
        });

        let parameters = OkParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


