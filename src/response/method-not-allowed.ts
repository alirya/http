import Response from './response.js';
import {CreateParameter} from './create.js';

export function MethodNotAllowedParameters() : MethodNotAllowedResponse<undefined>;

export function MethodNotAllowedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : MethodNotAllowedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function MethodNotAllowedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : MethodNotAllowedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return MethodNotAllowedParameter({message, headers, body}) as MethodNotAllowedResponse as MethodNotAllowedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type MethodNotAllowedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 405, Message>


export function MethodNotAllowedParameter() : MethodNotAllowedResponse<undefined>;

export function MethodNotAllowedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<MethodNotAllowedResponse<Body, Headers, Message>, 'status'>>,
) : MethodNotAllowedResponse<Body, Headers, Message>;

export function MethodNotAllowedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<MethodNotAllowedResponse<Body, Headers, Message>, 'status'>> = {},
) : MethodNotAllowedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 405}) as MethodNotAllowedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace MethodNotAllowed {
    export const Parameters = MethodNotAllowedParameters;
    export const Parameter = MethodNotAllowedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = MethodNotAllowedResponse<
        Body,
        Headers,
        Message
    >;
}
export default MethodNotAllowed;
