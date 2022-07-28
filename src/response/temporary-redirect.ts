import Response from './response';
import {CreateParameter} from './create';

export function TemporaryRedirectParameters() : Response<307, string, {}, undefined>;

export function TemporaryRedirectParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    307,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function TemporaryRedirectParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    307,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return TemporaryRedirectParameter({message, headers, body}) as Response as Response<
        307,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function TemporaryRedirectParameter() : Response<307, string, {}, undefined>;

export function TemporaryRedirectParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<307, Message, Headers, Body>;

export function TemporaryRedirectParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<307, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 307}) as Response<307, Message|string, Headers|{}, Body|undefined>;
}




namespace TemporaryRedirect {
    export const Parameters = TemporaryRedirectParameters;
    export const Parameter = TemporaryRedirectParameter;
}
export default TemporaryRedirect;
