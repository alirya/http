import {RangeNotSatisfiableParameter, RangeNotSatisfiableParameters} from '../../../dist/response/range-not-satisfiable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = RangeNotSatisfiableParameter({
            body,
            message,
            headers
        });

        const parameters = RangeNotSatisfiableParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


