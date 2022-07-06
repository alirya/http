import Response from './response.js';
import {CreateParameter} from './create.js';

export function RequestHeaderFieldsTooLargeParameters() : Response<431, string, {}, undefined>;

export function RequestHeaderFieldsTooLargeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    431,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function RequestHeaderFieldsTooLargeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    431,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return RequestHeaderFieldsTooLargeParameter({message, headers, body}) as Response as Response<
        431,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function RequestHeaderFieldsTooLargeParameter() : Response<431, string, {}, undefined>;

export function RequestHeaderFieldsTooLargeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<431, Message, Headers, Body>;

export function RequestHeaderFieldsTooLargeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<431, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 431}) as Response<431, Message|string, Headers|{}, Body|undefined>;
}




namespace RequestHeaderFieldsTooLarge {
    export const Parameters = RequestHeaderFieldsTooLargeParameters;
    export const Parameter = RequestHeaderFieldsTooLargeParameter;
}
export default RequestHeaderFieldsTooLarge;
