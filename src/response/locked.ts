import Response from './response.js';
import {CreateParameter} from './create.js';

export function LockedParameters() : LockedResponse<undefined>;

export function LockedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : LockedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function LockedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : LockedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return LockedParameter({message, headers, body}) as LockedResponse as LockedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type LockedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 423, Message>


export function LockedParameter() : LockedResponse<undefined>;

export function LockedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<LockedResponse<Body, Headers, Message>, 'status'>>,
) : LockedResponse<Body, Headers, Message>;

export function LockedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<LockedResponse<Body, Headers, Message>, 'status'>> = {},
) : LockedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 423}) as LockedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Locked {
    export const Parameters = LockedParameters;
    export const Parameter = LockedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = LockedResponse<
        Body,
        Headers,
        Message
    >;
}
export default Locked;
