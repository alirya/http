import Response from './response.js';
import {CreateParameter} from './create.js';

export function UnauthorizedParameters() : Response<401, string, {}, undefined>;

export function UnauthorizedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    401,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function UnauthorizedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    401,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnauthorizedParameter({message, headers, body}) as Response as Response<
        401,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function UnauthorizedParameter() : Response<401, string, {}, undefined>;

export function UnauthorizedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<401, Message, Headers, Body>;

export function UnauthorizedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<401, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 401}) as Response<401, Message|string, Headers|{}, Body|undefined>;
}




namespace Unauthorized {
    export const Parameters = UnauthorizedParameters;
    export const Parameter = UnauthorizedParameter;
}
export default Unauthorized;
