import Response from './response';
import {CreateParameter} from './create';

export function MethodNotAllowedParameters() : Response<405, string, {}, undefined>;

export function MethodNotAllowedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    405,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function MethodNotAllowedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    405,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return MethodNotAllowedParameter({message, headers, body}) as Response as Response<
        405,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function MethodNotAllowedParameter() : Response<405, string, {}, undefined>;

export function MethodNotAllowedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<405, Message, Headers, Body>;

export function MethodNotAllowedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<405, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 405}) as Response<405, Message|string, Headers|{}, Body|undefined>;
}




namespace MethodNotAllowed {
    export const Parameters = MethodNotAllowedParameters;
    export const Parameter = MethodNotAllowedParameter;
}
export default MethodNotAllowed;
