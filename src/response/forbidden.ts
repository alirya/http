import Response from './response.js';
import {CreateParameter} from './create.js';

export function ForbiddenParameters() : ForbiddenResponse<undefined>;

export function ForbiddenParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ForbiddenResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function ForbiddenParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ForbiddenResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return ForbiddenParameter({message, headers, body}) as ForbiddenResponse as ForbiddenResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type ForbiddenResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 403, Message>


export function ForbiddenParameter() : ForbiddenResponse<undefined>;

export function ForbiddenParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<ForbiddenResponse<Body, Headers, Message>, 'status'>>,
) : ForbiddenResponse<Body, Headers, Message>;

export function ForbiddenParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<ForbiddenResponse<Body, Headers, Message>, 'status'>> = {},
) : ForbiddenResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 403}) as ForbiddenResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Forbidden {
    export const Parameters = ForbiddenParameters;
    export const Parameter = ForbiddenParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = ForbiddenResponse<
        Body,
        Headers,
        Message
    >;
}
export default Forbidden;
