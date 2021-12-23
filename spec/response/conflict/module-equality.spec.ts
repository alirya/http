import ConflictParameters from "../../../dist/response/conflict-parameters";
import ConflictParameter from "../../../dist/response/conflict-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = ConflictParameter({
            body,
            message,
            headers
        });

        let parameters = ConflictParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


