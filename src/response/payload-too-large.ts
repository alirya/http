import Response from './response.js';
import {CreateParameter} from './create.js';

export function PayloadTooLargeParameters() : Response<413, string, {}, undefined>;

export function PayloadTooLargeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    413,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function PayloadTooLargeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    413,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return PayloadTooLargeParameter({message, headers, body}) as Response as Response<
        413,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function PayloadTooLargeParameter() : Response<413, string, {}, undefined>;

export function PayloadTooLargeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<413, Message, Headers, Body>;

export function PayloadTooLargeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<413, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 413}) as Response<413, Message|string, Headers|{}, Body|undefined>;
}




namespace PayloadTooLarge {
    export const Parameters = PayloadTooLargeParameters;
    export const Parameter = PayloadTooLargeParameter;
}
export default PayloadTooLarge;
