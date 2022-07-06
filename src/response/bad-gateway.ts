import Response from './response.js';
import {CreateParameter} from './create.js';

export function BadGatewayParameters() : Response<502, string, {}, undefined>;

export function BadGatewayParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    502,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function BadGatewayParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    502,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return BadGatewayParameter({message, headers, body}) as Response as Response<
        502,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function BadGatewayParameter() : Response<502, string, {}, undefined>;

export function BadGatewayParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<502, Message, Headers, Body>;

export function BadGatewayParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<502, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 502}) as Response<502, Message|string, Headers|{}, Body|undefined>;
}




namespace BadGateway {
    export const Parameters = BadGatewayParameters;
    export const Parameter = BadGatewayParameter;
}
export default BadGateway;
