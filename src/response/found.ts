import Response from './response';
import {CreateParameter} from './create';

export function FoundParameters() : FoundResponse<undefined>;

export function FoundParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : FoundResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function FoundParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : FoundResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return FoundParameter({message, headers, body}) as FoundResponse as FoundResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface FoundResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 302, Message> {

}


export function FoundParameter() : FoundResponse<undefined>;

export function FoundParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<FoundResponse<Body, Headers, Message>, 'status'>>,
) : FoundResponse<Body, Headers, Message>;

export function FoundParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<FoundResponse<Body, Headers, Message>, 'status'>> = {},
) : FoundResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 302}) as FoundResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Found {
    export const Parameters = FoundParameters;
    export const Parameter = FoundParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = FoundResponse<
        Body,
        Headers,
        Message
    >;
}
export default Found;
