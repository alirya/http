import Response from './response';
import {CreateParameter} from './create';

export function RequestTimeoutParameters() : RequestTimeoutResponse<undefined>;

export function RequestTimeoutParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : RequestTimeoutResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function RequestTimeoutParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : RequestTimeoutResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return RequestTimeoutParameter({message, headers, body}) as RequestTimeoutResponse as RequestTimeoutResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface RequestTimeoutResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 408, Message> {

}


export function RequestTimeoutParameter() : RequestTimeoutResponse<undefined>;

export function RequestTimeoutParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<RequestTimeoutResponse<Body, Headers, Message>, 'status'>>,
) : RequestTimeoutResponse<Body, Headers, Message>;

export function RequestTimeoutParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<RequestTimeoutResponse<Body, Headers, Message>, 'status'>> = {},
) : RequestTimeoutResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 408}) as RequestTimeoutResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace RequestTimeout {
    export const Parameters = RequestTimeoutParameters;
    export const Parameter = RequestTimeoutParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = RequestTimeoutResponse<
        Body,
        Headers,
        Message
    >;
}
export default RequestTimeout;
