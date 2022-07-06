import Response from './response.js';
import {CreateParameter} from './create.js';

export function NetworkAuthenticationRequiredParameters() : Response<511, string, {}, undefined>;

export function NetworkAuthenticationRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    511,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function NetworkAuthenticationRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    511,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NetworkAuthenticationRequiredParameter({message, headers, body}) as Response as Response<
        511,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function NetworkAuthenticationRequiredParameter() : Response<511, string, {}, undefined>;

export function NetworkAuthenticationRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<511, Message, Headers, Body>;

export function NetworkAuthenticationRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<511, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 511}) as Response<511, Message|string, Headers|{}, Body|undefined>;
}




namespace NetworkAuthenticationRequired {
    export const Parameters = NetworkAuthenticationRequiredParameters;
    export const Parameter = NetworkAuthenticationRequiredParameter;
}
export default NetworkAuthenticationRequired;
