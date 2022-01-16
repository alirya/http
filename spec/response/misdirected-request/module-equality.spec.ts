import MisdirectedRequestParameters from "../../../dist/response/misdirected-requesparameters";
import MisdirectedRequestParameter from "../../../dist/response/misdirected-requesparameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = MisdirectedRequestParameter({
            body,
            message,
            headers
        });

        let parameters = MisdirectedRequestParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


