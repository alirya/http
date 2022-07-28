import Response from './response';
import {CreateParameter} from './create';

export function UriTooLongParameters() : Response<414, string, {}, undefined>;

export function UriTooLongParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    414,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function UriTooLongParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    414,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UriTooLongParameter({message, headers, body}) as Response as Response<
        414,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function UriTooLongParameter() : Response<414, string, {}, undefined>;

export function UriTooLongParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<414, Message, Headers, Body>;

export function UriTooLongParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<414, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 414}) as Response<414, Message|string, Headers|{}, Body|undefined>;
}




namespace UriTooLong {
    export const Parameters = UriTooLongParameters;
    export const Parameter = UriTooLongParameter;
}
export default UriTooLong;
