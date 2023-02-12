import Response from './response.js';
import {CreateParameter} from './create.js';

export function RequestHeaderFieldsTooLargeParameters() : RequestHeaderFieldsTooLargeResponse<undefined>;

export function RequestHeaderFieldsTooLargeParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : RequestHeaderFieldsTooLargeResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function RequestHeaderFieldsTooLargeParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : RequestHeaderFieldsTooLargeResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return RequestHeaderFieldsTooLargeParameter({message, headers, body}) as RequestHeaderFieldsTooLargeResponse as RequestHeaderFieldsTooLargeResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type RequestHeaderFieldsTooLargeResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 431, Message>


export function RequestHeaderFieldsTooLargeParameter() : RequestHeaderFieldsTooLargeResponse<undefined>;

export function RequestHeaderFieldsTooLargeParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<RequestHeaderFieldsTooLargeResponse<Body, Headers, Message>, 'status'>>,
) : RequestHeaderFieldsTooLargeResponse<Body, Headers, Message>;

export function RequestHeaderFieldsTooLargeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<RequestHeaderFieldsTooLargeResponse<Body, Headers, Message>, 'status'>> = {},
) : RequestHeaderFieldsTooLargeResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 431}) as RequestHeaderFieldsTooLargeResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace RequestHeaderFieldsTooLarge {
    export const Parameters = RequestHeaderFieldsTooLargeParameters;
    export const Parameter = RequestHeaderFieldsTooLargeParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = RequestHeaderFieldsTooLargeResponse<
        Body,
        Headers,
        Message
    >;
}
export default RequestHeaderFieldsTooLarge;
