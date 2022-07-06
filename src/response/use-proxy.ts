import Response from './response.js';
import {CreateParameter} from './create.js';

export function UseProxyParameters() : Response<305, string, {}, undefined>;

export function UseProxyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    305,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function UseProxyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    305,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UseProxyParameter({message, headers, body}) as Response as Response<
        305,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function UseProxyParameter() : Response<305, string, {}, undefined>;

export function UseProxyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<305, Message, Headers, Body>;

export function UseProxyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<305, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 305}) as Response<305, Message|string, Headers|{}, Body|undefined>;
}




namespace UseProxy {
    export const Parameters = UseProxyParameters;
    export const Parameter = UseProxyParameter;
}
export default UseProxy;
