import UnsupportedMediaTypeParameters from "../../../dist/response/unsupported-media-type-parameters";
import UnsupportedMediaTypeParameter from "../../../dist/response/unsupported-media-type-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = UnsupportedMediaTypeParameter({
            body,
            message,
            headers
        });

        let parameters = UnsupportedMediaTypeParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


