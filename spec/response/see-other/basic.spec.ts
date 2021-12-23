import SeeOther from "../../../dist/response/see-other-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = SeeOther({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(303);
        expect(response.message).toBe(Standard(303));

    });

    it("header", function() {

        let response = SeeOther({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(303);
        expect(response.message).toBe(Standard(303));

    });
});


