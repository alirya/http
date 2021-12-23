import ExpectationFailed from "../../../dist/response/expectation-failed-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = ExpectationFailed({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(417);
        expect(response.message).toBe(Standard(417));

    });

    it("header", function() {

        let response = ExpectationFailed({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(417);
        expect(response.message).toBe(Standard(417));

    });
});


