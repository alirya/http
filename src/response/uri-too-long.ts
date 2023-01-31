import Response from './response';
import {CreateParameter} from './create';

export function UriTooLongParameters() : UriTooLongResponse<undefined>;

export function UriTooLongParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UriTooLongResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function UriTooLongParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UriTooLongResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return UriTooLongParameter({message, headers, body}) as UriTooLongResponse as UriTooLongResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface UriTooLongResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 414, Message> {

}


export function UriTooLongParameter() : UriTooLongResponse<undefined>;

export function UriTooLongParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<UriTooLongResponse<Body, Headers, Message>, 'status'>>,
) : UriTooLongResponse<Body, Headers, Message>;

export function UriTooLongParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<UriTooLongResponse<Body, Headers, Message>, 'status'>> = {},
) : UriTooLongResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 414}) as UriTooLongResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace UriTooLong {
    export const Parameters = UriTooLongParameters;
    export const Parameter = UriTooLongParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = UriTooLongResponse<
        Body,
        Headers,
        Message
    >;
}
export default UriTooLong;
