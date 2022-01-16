import ConflictParameters from "../../../dist/response/conflicparameters";
import ConflictParameter from "../../../dist/response/conflicparameter";

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


