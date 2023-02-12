import Response from './response.js';
import {CreateParameter} from './create.js';

export function NotAcceptableParameters() : NotAcceptableResponse<undefined>;

export function NotAcceptableParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NotAcceptableResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function NotAcceptableParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NotAcceptableResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return NotAcceptableParameter({message, headers, body}) as NotAcceptableResponse as NotAcceptableResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type NotAcceptableResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 406, Message>


export function NotAcceptableParameter() : NotAcceptableResponse<undefined>;

export function NotAcceptableParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<NotAcceptableResponse<Body, Headers, Message>, 'status'>>,
) : NotAcceptableResponse<Body, Headers, Message>;

export function NotAcceptableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<NotAcceptableResponse<Body, Headers, Message>, 'status'>> = {},
) : NotAcceptableResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 406}) as NotAcceptableResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace NotAcceptable {
    export const Parameters = NotAcceptableParameters;
    export const Parameter = NotAcceptableParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = NotAcceptableResponse<
        Body,
        Headers,
        Message
    >;
}
export default NotAcceptable;
