import Response from './response.js';
import {CreateParameter} from './create.js';

export function GatewayTimeoutParameters() : GatewayTimeoutResponse<undefined>;

export function GatewayTimeoutParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : GatewayTimeoutResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function GatewayTimeoutParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : GatewayTimeoutResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return GatewayTimeoutParameter({message, headers, body}) as GatewayTimeoutResponse as GatewayTimeoutResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type GatewayTimeoutResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 504, Message>


export function GatewayTimeoutParameter() : GatewayTimeoutResponse<undefined>;

export function GatewayTimeoutParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<GatewayTimeoutResponse<Body, Headers, Message>, 'status'>>,
) : GatewayTimeoutResponse<Body, Headers, Message>;

export function GatewayTimeoutParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<GatewayTimeoutResponse<Body, Headers, Message>, 'status'>> = {},
) : GatewayTimeoutResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 504}) as GatewayTimeoutResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace GatewayTimeout {
    export const Parameters = GatewayTimeoutParameters;
    export const Parameter = GatewayTimeoutParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = GatewayTimeoutResponse<
        Body,
        Headers,
        Message
    >;
}
export default GatewayTimeout;
