import NoContent from "../../../dist/response/no-content-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = NoContent({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(204);
        expect(response.message).toBe(Standard(204));

    });

    it("header", function() {

        let response = NoContent({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(204);
        expect(response.message).toBe(Standard(204));

    });
});


