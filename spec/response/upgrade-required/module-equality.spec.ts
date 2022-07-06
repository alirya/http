import {UpgradeRequiredParameter, UpgradeRequiredParameters} from '../../../dist/response/upgrade-required.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = UpgradeRequiredParameter({
            body,
            message,
            headers
        });

        let parameters = UpgradeRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


