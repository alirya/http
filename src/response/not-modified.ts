import Response from './response';
import {CreateParameter} from './create';

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

export interface NotModifiedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 304, Message> {

}


export function NotModifiedParameter() : NotModifiedResponse<undefined>;

export function NotModifiedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<NotModifiedResponse<Body, Headers, Message>, 'code'>>,
) : NotModifiedResponse<Body, Headers, Message>;

export function NotModifiedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<NotModifiedResponse<Body, Headers, Message>, 'code'>> = {},
) : NotModifiedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 304}) as NotModifiedResponse<Body|undefined, Headers|{}, Message|string>;
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
