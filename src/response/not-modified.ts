import Response from './response';
import {CreateParameter} from './create';

export function NotModifiedParameters() : Response<304, string, {}, undefined>;

export function NotModifiedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    304,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function NotModifiedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    304,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NotModifiedParameter({message, headers, body}) as Response as Response<
        304,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function NotModifiedParameter() : Response<304, string, {}, undefined>;

export function NotModifiedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<304, Message, Headers, Body>;

export function NotModifiedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<304, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 304}) as Response<304, Message|string, Headers|{}, Body|undefined>;
}




namespace NotModified {
    export const Parameters = NotModifiedParameters;
    export const Parameter = NotModifiedParameter;
}
export default NotModified;
