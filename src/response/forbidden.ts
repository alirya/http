import Response from './response';
import {CreateParameter} from './create';

export function ForbiddenParameters() : Response<403, string, {}, undefined>;

export function ForbiddenParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    403,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function ForbiddenParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    403,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ForbiddenParameter({message, headers, body}) as Response as Response<
        403,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function ForbiddenParameter() : Response<403, string, {}, undefined>;

export function ForbiddenParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<403, Message, Headers, Body>;

export function ForbiddenParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<403, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 403}) as Response<403, Message|string, Headers|{}, Body|undefined>;
}




namespace Forbidden {
    export const Parameters = ForbiddenParameters;
    export const Parameter = ForbiddenParameter;
}
export default Forbidden;
