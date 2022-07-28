import Response from './response';
import {CreateParameter} from './create';

export function HttpVersionNotSupportedParameters() : Response<505, string, {}, undefined>;

export function HttpVersionNotSupportedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    505,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function HttpVersionNotSupportedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    505,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return HttpVersionNotSupportedParameter({message, headers, body}) as Response as Response<
        505,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function HttpVersionNotSupportedParameter() : Response<505, string, {}, undefined>;

export function HttpVersionNotSupportedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<505, Message, Headers, Body>;

export function HttpVersionNotSupportedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<505, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 505}) as Response<505, Message|string, Headers|{}, Body|undefined>;
}




namespace HttpVersionNotSupported {
    export const Parameters = HttpVersionNotSupportedParameters;
    export const Parameter = HttpVersionNotSupportedParameter;
}
export default HttpVersionNotSupported;
