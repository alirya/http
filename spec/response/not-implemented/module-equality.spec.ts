import NotImplementedParameters from "../../../dist/response/noimplemented-parameters";
import NotImplementedParameter from "../../../dist/response/noimplemented-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = NotImplementedParameter({
            body,
            message,
            headers
        });

        let parameters = NotImplementedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


