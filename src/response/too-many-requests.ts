import Response from './response';
import {CreateParameter} from './create';

export function TooManyRequestsParameters() : TooManyRequestsResponse<undefined>;

export function TooManyRequestsParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : TooManyRequestsResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function TooManyRequestsParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : TooManyRequestsResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return TooManyRequestsParameter({message, headers, body}) as TooManyRequestsResponse as TooManyRequestsResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface TooManyRequestsResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 429, Message> {

}


export function TooManyRequestsParameter() : TooManyRequestsResponse<undefined>;

export function TooManyRequestsParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<TooManyRequestsResponse<Body, Headers, Message>, 'status'>>,
) : TooManyRequestsResponse<Body, Headers, Message>;

export function TooManyRequestsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<TooManyRequestsResponse<Body, Headers, Message>, 'status'>> = {},
) : TooManyRequestsResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 429}) as TooManyRequestsResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace TooManyRequests {
    export const Parameters = TooManyRequestsParameters;
    export const Parameter = TooManyRequestsParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = TooManyRequestsResponse<
        Body,
        Headers,
        Message
    >;
}
export default TooManyRequests;
