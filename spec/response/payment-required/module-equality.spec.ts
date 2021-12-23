import PaymentRequiredParameters from "../../../dist/response/payment-required-parameters";
import PaymentRequiredParameter from "../../../dist/response/payment-required-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = PaymentRequiredParameter({
            body,
            message,
            headers
        });

        let parameters = PaymentRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


