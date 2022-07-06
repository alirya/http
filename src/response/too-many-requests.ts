import Response from './response.js';
import {CreateParameter} from './create.js';

export function TooManyRequestsParameters() : Response<429, string, {}, undefined>;

export function TooManyRequestsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    429,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function TooManyRequestsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    429,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return TooManyRequestsParameter({message, headers, body}) as Response as Response<
        429,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function TooManyRequestsParameter() : Response<429, string, {}, undefined>;

export function TooManyRequestsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<429, Message, Headers, Body>;

export function TooManyRequestsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<429, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 429}) as Response<429, Message|string, Headers|{}, Body|undefined>;
}




namespace TooManyRequests {
    export const Parameters = TooManyRequestsParameters;
    export const Parameter = TooManyRequestsParameter;
}
export default TooManyRequests;
