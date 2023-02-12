import Response from './response.js';
import {CreateParameter} from './create.js';

export function TooEarlyParameters() : TooEarlyResponse<undefined>;

export function TooEarlyParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : TooEarlyResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function TooEarlyParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : TooEarlyResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return TooEarlyParameter({message, headers, body}) as TooEarlyResponse as TooEarlyResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type TooEarlyResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 425, Message>


export function TooEarlyParameter() : TooEarlyResponse<undefined>;

export function TooEarlyParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<TooEarlyResponse<Body, Headers, Message>, 'status'>>,
) : TooEarlyResponse<Body, Headers, Message>;

export function TooEarlyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<TooEarlyResponse<Body, Headers, Message>, 'status'>> = {},
) : TooEarlyResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 425}) as TooEarlyResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace TooEarly {
    export const Parameters = TooEarlyParameters;
    export const Parameter = TooEarlyParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = TooEarlyResponse<
        Body,
        Headers,
        Message
    >;
}
export default TooEarly;
