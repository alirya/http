import ResetContent from "../../../dist/response/reset-content-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = ResetContent({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(205);
        expect(response.message).toBe(Standard(205));

    });

    it("header", function() {

        let response = ResetContent({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(205);
        expect(response.message).toBe(Standard(205));

    });
});


