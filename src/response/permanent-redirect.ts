import Response from './response';
import {CreateParameter} from './create';

export function PermanentRedirectParameters() : Response<308, string, {}, undefined>;

export function PermanentRedirectParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    308,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function PermanentRedirectParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    308,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return PermanentRedirectParameter({message, headers, body}) as Response as Response<
        308,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function PermanentRedirectParameter() : Response<308, string, {}, undefined>;

export function PermanentRedirectParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<308, Message, Headers, Body>;

export function PermanentRedirectParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<308, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 308}) as Response<308, Message|string, Headers|{}, Body|undefined>;
}




namespace PermanentRedirect {
    export const Parameters = PermanentRedirectParameters;
    export const Parameter = PermanentRedirectParameter;
}
export default PermanentRedirect;
