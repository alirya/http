import NotExtended from "../../../dist/response/not-extended-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = NotExtended({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(510);
        expect(response.message).toBe(Standard(510));

    });

    it("header", function() {

        let response = NotExtended({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(510);
        expect(response.message).toBe(Standard(510));

    });
});


