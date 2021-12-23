import MovedPermanentlyParameters from "../../../dist/response/moved-permanently-parameters";
import MovedPermanentlyParameter from "../../../dist/response/moved-permanently-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = MovedPermanentlyParameter({
            body,
            message,
            headers
        });

        let parameters = MovedPermanentlyParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


