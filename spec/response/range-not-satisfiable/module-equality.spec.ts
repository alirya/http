import RangeNotSatisfiableParameters from "../../../dist/response/range-nosatisfiable-parameters";
import RangeNotSatisfiableParameter from "../../../dist/response/range-nosatisfiable-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = RangeNotSatisfiableParameter({
            body,
            message,
            headers
        });

        let parameters = RangeNotSatisfiableParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


