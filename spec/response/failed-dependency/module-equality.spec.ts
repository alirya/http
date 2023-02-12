import {FailedDependencyParameter, FailedDependencyParameters} from '../../../dist/response/failed-dependency.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = FailedDependencyParameter({
            body,
            message,
            headers
        });

        const parameters = FailedDependencyParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


