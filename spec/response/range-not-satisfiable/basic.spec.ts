import RangeNotSatisfiable from "../../../dist/response/range-nosatisfiable-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = RangeNotSatisfiable({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(416);
        expect(response.message).toBe(Standard(416));

    });

    it("header", function() {

        let response = RangeNotSatisfiable({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(416);
        expect(response.message).toBe(Standard(416));

    });
});


