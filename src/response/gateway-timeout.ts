import Response from './response.js';
import {CreateParameter} from './create.js';

export function GatewayTimeoutParameters() : Response<504, string, {}, undefined>;

export function GatewayTimeoutParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    504,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function GatewayTimeoutParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    504,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return GatewayTimeoutParameter({message, headers, body}) as Response as Response<
        504,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function GatewayTimeoutParameter() : Response<504, string, {}, undefined>;

export function GatewayTimeoutParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<504, Message, Headers, Body>;

export function GatewayTimeoutParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<504, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 504}) as Response<504, Message|string, Headers|{}, Body|undefined>;
}




namespace GatewayTimeout {
    export const Parameters = GatewayTimeoutParameters;
    export const Parameter = GatewayTimeoutParameter;
}
export default GatewayTimeout;
