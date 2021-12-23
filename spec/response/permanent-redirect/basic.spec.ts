import PermanentRedirect from "../../../dist/response/permanent-redirect-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = PermanentRedirect({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(308);
        expect(response.message).toBe(Standard(308));

    });

    it("header", function() {

        let response = PermanentRedirect({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(308);
        expect(response.message).toBe(Standard(308));

    });
});


