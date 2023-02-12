import Response from './response.js';
import {CreateParameter} from './create.js';

export function MovedPermanentlyParameters() : MovedPermanentlyResponse<undefined>;

export function MovedPermanentlyParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : MovedPermanentlyResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function MovedPermanentlyParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : MovedPermanentlyResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return MovedPermanentlyParameter({message, headers, body}) as MovedPermanentlyResponse as MovedPermanentlyResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type MovedPermanentlyResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 301, Message>


export function MovedPermanentlyParameter() : MovedPermanentlyResponse<undefined>;

export function MovedPermanentlyParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<MovedPermanentlyResponse<Body, Headers, Message>, 'status'>>,
) : MovedPermanentlyResponse<Body, Headers, Message>;

export function MovedPermanentlyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<MovedPermanentlyResponse<Body, Headers, Message>, 'status'>> = {},
) : MovedPermanentlyResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 301}) as MovedPermanentlyResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace MovedPermanently {
    export const Parameters = MovedPermanentlyParameters;
    export const Parameter = MovedPermanentlyParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = MovedPermanentlyResponse<
        Body,
        Headers,
        Message
    >;
}
export default MovedPermanently;
