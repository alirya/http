import PaymentRequired from "../../../dist/response/paymenrequired-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = PaymentRequired({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(402);
        expect(response.message).toBe(Standard(402));

    });

    it("header", function() {

        let response = PaymentRequired({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(402);
        expect(response.message).toBe(Standard(402));

    });
});


