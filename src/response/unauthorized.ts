import Response from './response.js';
import {CreateParameter} from './create.js';

export function UnauthorizedParameters() : UnauthorizedResponse<undefined>;

export function UnauthorizedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnauthorizedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function UnauthorizedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnauthorizedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return UnauthorizedParameter({message, headers, body}) as UnauthorizedResponse as UnauthorizedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type UnauthorizedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 401, Message>


export function UnauthorizedParameter() : UnauthorizedResponse<undefined>;

export function UnauthorizedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<UnauthorizedResponse<Body, Headers, Message>, 'status'>>,
) : UnauthorizedResponse<Body, Headers, Message>;

export function UnauthorizedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<UnauthorizedResponse<Body, Headers, Message>, 'status'>> = {},
) : UnauthorizedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 401}) as UnauthorizedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Unauthorized {
    export const Parameters = UnauthorizedParameters;
    export const Parameter = UnauthorizedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = UnauthorizedResponse<
        Body,
        Headers,
        Message
    >;
}
export default Unauthorized;
