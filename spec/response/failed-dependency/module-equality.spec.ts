import FailedDependencyParameters from "../../../dist/response/failed-dependency-parameters";
import FailedDependencyParameter from "../../../dist/response/failed-dependency-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = FailedDependencyParameter({
            body,
            message,
            headers
        });

        let parameters = FailedDependencyParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


