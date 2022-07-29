import Response from './response';
import {CreateParameter} from './create';

export function TemporaryRedirectParameters() : TemporaryRedirectResponse<undefined>;

export function TemporaryRedirectParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : TemporaryRedirectResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function TemporaryRedirectParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : TemporaryRedirectResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return TemporaryRedirectParameter({message, headers, body}) as TemporaryRedirectResponse as TemporaryRedirectResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface TemporaryRedirectResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 307, Message> {

}


export function TemporaryRedirectParameter() : TemporaryRedirectResponse<undefined>;

export function TemporaryRedirectParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<TemporaryRedirectResponse<Body, Headers, Message>, 'code'>>,
) : TemporaryRedirectResponse<Body, Headers, Message>;

export function TemporaryRedirectParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<TemporaryRedirectResponse<Body, Headers, Message>, 'code'>> = {},
) : TemporaryRedirectResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 307}) as TemporaryRedirectResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace TemporaryRedirect {
    export const Parameters = TemporaryRedirectParameters;
    export const Parameter = TemporaryRedirectParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = TemporaryRedirectResponse<
        Body,
        Headers,
        Message
    >;
}
export default TemporaryRedirect;
