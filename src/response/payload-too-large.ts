import Response from './response.js';
import {CreateParameter} from './create.js';

export function PayloadTooLargeParameters() : PayloadTooLargeResponse<undefined>;

export function PayloadTooLargeParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PayloadTooLargeResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function PayloadTooLargeParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PayloadTooLargeResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return PayloadTooLargeParameter({message, headers, body}) as PayloadTooLargeResponse as PayloadTooLargeResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type PayloadTooLargeResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 413, Message>


export function PayloadTooLargeParameter() : PayloadTooLargeResponse<undefined>;

export function PayloadTooLargeParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<PayloadTooLargeResponse<Body, Headers, Message>, 'status'>>,
) : PayloadTooLargeResponse<Body, Headers, Message>;

export function PayloadTooLargeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<PayloadTooLargeResponse<Body, Headers, Message>, 'status'>> = {},
) : PayloadTooLargeResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 413}) as PayloadTooLargeResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace PayloadTooLarge {
    export const Parameters = PayloadTooLargeParameters;
    export const Parameter = PayloadTooLargeParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = PayloadTooLargeResponse<
        Body,
        Headers,
        Message
    >;
}
export default PayloadTooLarge;
