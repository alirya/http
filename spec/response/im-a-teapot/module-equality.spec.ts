import ImATeapotParameters from "../../../dist/response/im-a-teapot-parameters";
import ImATeapotParameter from "../../../dist/response/im-a-teapot-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = ImATeapotParameter({
            body,
            message,
            headers
        });

        let parameters = ImATeapotParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


