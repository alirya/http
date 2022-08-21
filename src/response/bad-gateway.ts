import Response from './response';
import {CreateParameter} from './create';

export function BadGatewayParameters() : BadGatewayResponse<undefined>;

export function BadGatewayParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : BadGatewayResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function BadGatewayParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : BadGatewayResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return BadGatewayParameter({message, headers, body}) as BadGatewayResponse as BadGatewayResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface BadGatewayResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 502, Message> {

}


export function BadGatewayParameter() : BadGatewayResponse<undefined>;

export function BadGatewayParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<BadGatewayResponse<Body, Headers, Message>, 'code'>>,
) : BadGatewayResponse<Body, Headers, Message>;

export function BadGatewayParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<BadGatewayResponse<Body, Headers, Message>, 'code'>> = {},
) : BadGatewayResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 502}) as BadGatewayResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace BadGateway {
    export const Parameters = BadGatewayParameters;
    export const Parameter = BadGatewayParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = BadGatewayResponse<
        Body,
        Headers,
        Message
    >;
}
export default BadGateway;
