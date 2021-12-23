import VariantAlsoNegotiatesParameters from "../../../dist/response/variant-also-negotiates-parameters";
import VariantAlsoNegotiatesParameter from "../../../dist/response/variant-also-negotiates-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = VariantAlsoNegotiatesParameter({
            body,
            message,
            headers
        });

        let parameters = VariantAlsoNegotiatesParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


