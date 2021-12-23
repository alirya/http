import ProxyAuthenticationRequiredParameters from "../../../dist/response/proxy-authentication-required-parameters";
import ProxyAuthenticationRequiredParameter from "../../../dist/response/proxy-authentication-required-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = ProxyAuthenticationRequiredParameter({
            body,
            message,
            headers
        });

        let parameters = ProxyAuthenticationRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


