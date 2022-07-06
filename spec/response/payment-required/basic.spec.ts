import PaymentRequired from '../../../dist/response/payment-required.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = PaymentRequired.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(402);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = PaymentRequired.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(402);
        expect(response.message).toBe(Standard(402));

    });

    it('auto message', function() {

        let response = PaymentRequired.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(402);
        expect(response.message).toBe(Standard(402));

    });

    it('body only', function() {

        let response = PaymentRequired.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(402);
        expect(response.message).toBe(Standard(402));

    });
});


