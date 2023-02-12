import Response from './response.js';
import {CreateParameter} from './create.js';

export function ProxyAuthenticationRequiredParameters() : ProxyAuthenticationRequiredResponse<undefined>;

export function ProxyAuthenticationRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ProxyAuthenticationRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function ProxyAuthenticationRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ProxyAuthenticationRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return ProxyAuthenticationRequiredParameter({message, headers, body}) as ProxyAuthenticationRequiredResponse as ProxyAuthenticationRequiredResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type ProxyAuthenticationRequiredResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 407, Message>


export function ProxyAuthenticationRequiredParameter() : ProxyAuthenticationRequiredResponse<undefined>;

export function ProxyAuthenticationRequiredParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<ProxyAuthenticationRequiredResponse<Body, Headers, Message>, 'status'>>,
) : ProxyAuthenticationRequiredResponse<Body, Headers, Message>;

export function ProxyAuthenticationRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<ProxyAuthenticationRequiredResponse<Body, Headers, Message>, 'status'>> = {},
) : ProxyAuthenticationRequiredResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 407}) as ProxyAuthenticationRequiredResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace ProxyAuthenticationRequired {
    export const Parameters = ProxyAuthenticationRequiredParameters;
    export const Parameter = ProxyAuthenticationRequiredParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = ProxyAuthenticationRequiredResponse<
        Body,
        Headers,
        Message
    >;
}
export default ProxyAuthenticationRequired;
