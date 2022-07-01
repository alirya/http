import Response from './response';
import {CreateParameter} from './create';

export function PaymentRequiredParameters() : Response<402, string, {}, undefined>;

export function PaymentRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    402,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function PaymentRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    402,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return PaymentRequiredParameter({message, headers, body}) as Response as Response<
        402,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function PaymentRequiredParameter() : Response<402, string, {}, undefined>;

export function PaymentRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<402, Message, Headers, Body>;

export function PaymentRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<402, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 402}) as Response<402, Message|string, Headers|{}, Body|undefined>;
}




namespace PaymentRequired {
    export const Parameters = PaymentRequiredParameters;
    export const Parameter = PaymentRequiredParameter;
}
export default PaymentRequired;
