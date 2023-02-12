import {PaymentRequiredParameter, PaymentRequiredParameters} from '../../../dist/response/payment-required.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = PaymentRequiredParameter({
            body,
            message,
            headers
        });

        const parameters = PaymentRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


