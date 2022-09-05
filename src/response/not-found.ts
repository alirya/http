import Response from './response';
import {CreateParameter} from './create';

export function NotFoundParameters() : NotFoundResponse<undefined>;

export function NotFoundParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NotFoundResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function NotFoundParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NotFoundResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return NotFoundParameter({message, headers, body}) as NotFoundResponse as NotFoundResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface NotFoundResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 404, Message> {

}


export function NotFoundParameter() : NotFoundResponse<undefined>;

export function NotFoundParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<NotFoundResponse<Body, Headers, Message>, 'status'>>,
) : NotFoundResponse<Body, Headers, Message>;

export function NotFoundParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<NotFoundResponse<Body, Headers, Message>, 'status'>> = {},
) : NotFoundResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 404}) as NotFoundResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace NotFound {
    export const Parameters = NotFoundParameters;
    export const Parameter = NotFoundParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = NotFoundResponse<
        Body,
        Headers,
        Message
    >;
}
export default NotFound;
