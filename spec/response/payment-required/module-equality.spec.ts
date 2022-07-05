import {PaymentRequiredParameter, PaymentRequiredParameters} from '../../../dist/response/payment-required';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = PaymentRequiredParameter({
            body,
            message,
            headers
        });

        let parameters = PaymentRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


