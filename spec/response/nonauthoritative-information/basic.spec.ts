import NonauthoritativeInformation from "../../../dist/response/nonauthoritative-information-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = NonauthoritativeInformation({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(203);
        expect(response.message).toBe(Standard(203));

    });

    it("header", function() {

        let response = NonauthoritativeInformation({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(203);
        expect(response.message).toBe(Standard(203));

    });
});


