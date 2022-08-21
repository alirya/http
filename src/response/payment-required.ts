import Response from './response';
import {CreateParameter} from './create';

export function PaymentRequiredParameters() : PaymentRequiredResponse<undefined>;

export function PaymentRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PaymentRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function PaymentRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PaymentRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return PaymentRequiredParameter({message, headers, body}) as PaymentRequiredResponse as PaymentRequiredResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface PaymentRequiredResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 402, Message> {

}


export function PaymentRequiredParameter() : PaymentRequiredResponse<undefined>;

export function PaymentRequiredParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<PaymentRequiredResponse<Body, Headers, Message>, 'code'>>,
) : PaymentRequiredResponse<Body, Headers, Message>;

export function PaymentRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<PaymentRequiredResponse<Body, Headers, Message>, 'code'>> = {},
) : PaymentRequiredResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 402}) as PaymentRequiredResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace PaymentRequired {
    export const Parameters = PaymentRequiredParameters;
    export const Parameter = PaymentRequiredParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = PaymentRequiredResponse<
        Body,
        Headers,
        Message
    >;
}
export default PaymentRequired;
