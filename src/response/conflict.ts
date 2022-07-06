import Response from './response.js';
import {CreateParameter} from './create.js';

export function ConflictParameters() : Response<409, string, {}, undefined>;

export function ConflictParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    409,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function ConflictParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    409,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ConflictParameter({message, headers, body}) as Response as Response<
        409,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function ConflictParameter() : Response<409, string, {}, undefined>;

export function ConflictParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<409, Message, Headers, Body>;

export function ConflictParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<409, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 409}) as Response<409, Message|string, Headers|{}, Body|undefined>;
}




namespace Conflict {
    export const Parameters = ConflictParameters;
    export const Parameter = ConflictParameter;
}
export default Conflict;
