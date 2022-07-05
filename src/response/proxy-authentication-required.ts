import Response from './response';
import {CreateParameter} from './create';

export function ProxyAuthenticationRequiredParameters() : Response<407, string, {}, undefined>;

export function ProxyAuthenticationRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    407,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function ProxyAuthenticationRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    407,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ProxyAuthenticationRequiredParameter({message, headers, body}) as Response as Response<
        407,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function ProxyAuthenticationRequiredParameter() : Response<407, string, {}, undefined>;

export function ProxyAuthenticationRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<407, Message, Headers, Body>;

export function ProxyAuthenticationRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<407, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 407}) as Response<407, Message|string, Headers|{}, Body|undefined>;
}




namespace ProxyAuthenticationRequired {
    export const Parameters = ProxyAuthenticationRequiredParameters;
    export const Parameter = ProxyAuthenticationRequiredParameter;
}
export default ProxyAuthenticationRequired;
