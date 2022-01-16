import InsufficientStorageParameters from "../../../dist/response/insufficienstorage-parameters";
import InsufficientStorageParameter from "../../../dist/response/insufficienstorage-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = InsufficientStorageParameter({
            body,
            message,
            headers
        });

        let parameters = InsufficientStorageParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


