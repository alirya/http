import Response from './response.js';
import {CreateParameter} from './create.js';

export function NotFoundParameters() : Response<404, string, {}, undefined>;

export function NotFoundParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    404,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function NotFoundParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    404,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NotFoundParameter({message, headers, body}) as Response as Response<
        404,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function NotFoundParameter() : Response<404, string, {}, undefined>;

export function NotFoundParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<404, Message, Headers, Body>;

export function NotFoundParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<404, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 404}) as Response<404, Message|string, Headers|{}, Body|undefined>;
}




namespace NotFound {
    export const Parameters = NotFoundParameters;
    export const Parameter = NotFoundParameter;
}
export default NotFound;
