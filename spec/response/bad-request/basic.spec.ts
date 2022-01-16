import BadRequest from "../../../dist/response/bad-requesparameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = BadRequest({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(400);
        expect(response.message).toBe(Standard(400));

    });

    it("header", function() {

        let response = BadRequest({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(400);
        expect(response.message).toBe(Standard(400));

    });
});


