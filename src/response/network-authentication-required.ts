import Response from './response';
import {CreateParameter} from './create';

export function NetworkAuthenticationRequiredParameters() : NetworkAuthenticationRequiredResponse<undefined>;

export function NetworkAuthenticationRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NetworkAuthenticationRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function NetworkAuthenticationRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NetworkAuthenticationRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return NetworkAuthenticationRequiredParameter({message, headers, body}) as NetworkAuthenticationRequiredResponse as NetworkAuthenticationRequiredResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface NetworkAuthenticationRequiredResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 511, Message> {

}


export function NetworkAuthenticationRequiredParameter() : NetworkAuthenticationRequiredResponse<undefined>;

export function NetworkAuthenticationRequiredParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<NetworkAuthenticationRequiredResponse<Body, Headers, Message>, 'status'>>,
) : NetworkAuthenticationRequiredResponse<Body, Headers, Message>;

export function NetworkAuthenticationRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<NetworkAuthenticationRequiredResponse<Body, Headers, Message>, 'status'>> = {},
) : NetworkAuthenticationRequiredResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 511}) as NetworkAuthenticationRequiredResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace NetworkAuthenticationRequired {
    export const Parameters = NetworkAuthenticationRequiredParameters;
    export const Parameter = NetworkAuthenticationRequiredParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = NetworkAuthenticationRequiredResponse<
        Body,
        Headers,
        Message
    >;
}
export default NetworkAuthenticationRequired;
