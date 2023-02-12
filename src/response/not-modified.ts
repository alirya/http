import Response from './response.js';
import {CreateParameter} from './create.js';

export function NotModifiedParameters() : NotModifiedResponse<undefined>;

export function NotModifiedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NotModifiedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function NotModifiedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NotModifiedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return NotModifiedParameter({message, headers, body}) as NotModifiedResponse as NotModifiedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type NotModifiedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 304, Message>


export function NotModifiedParameter() : NotModifiedResponse<undefined>;

export function NotModifiedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<NotModifiedResponse<Body, Headers, Message>, 'status'>>,
) : NotModifiedResponse<Body, Headers, Message>;

export function NotModifiedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<NotModifiedResponse<Body, Headers, Message>, 'status'>> = {},
) : NotModifiedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 304}) as NotModifiedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace NotModified {
    export const Parameters = NotModifiedParameters;
    export const Parameter = NotModifiedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = NotModifiedResponse<
        Body,
        Headers,
        Message
    >;
}
export default NotModified;
