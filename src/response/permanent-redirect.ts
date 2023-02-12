import Response from './response.js';
import {CreateParameter} from './create.js';

export function PermanentRedirectParameters() : PermanentRedirectResponse<undefined>;

export function PermanentRedirectParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PermanentRedirectResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function PermanentRedirectParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PermanentRedirectResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return PermanentRedirectParameter({message, headers, body}) as PermanentRedirectResponse as PermanentRedirectResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type PermanentRedirectResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 308, Message>


export function PermanentRedirectParameter() : PermanentRedirectResponse<undefined>;

export function PermanentRedirectParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<PermanentRedirectResponse<Body, Headers, Message>, 'status'>>,
) : PermanentRedirectResponse<Body, Headers, Message>;

export function PermanentRedirectParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<PermanentRedirectResponse<Body, Headers, Message>, 'status'>> = {},
) : PermanentRedirectResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 308}) as PermanentRedirectResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace PermanentRedirect {
    export const Parameters = PermanentRedirectParameters;
    export const Parameter = PermanentRedirectParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = PermanentRedirectResponse<
        Body,
        Headers,
        Message
    >;
}
export default PermanentRedirect;
