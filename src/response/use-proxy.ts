import Response from './response.js';
import {CreateParameter} from './create.js';

export function UseProxyParameters() : UseProxyResponse<undefined>;

export function UseProxyParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UseProxyResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function UseProxyParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UseProxyResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return UseProxyParameter({message, headers, body}) as UseProxyResponse as UseProxyResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type UseProxyResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 305, Message>


export function UseProxyParameter() : UseProxyResponse<undefined>;

export function UseProxyParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<UseProxyResponse<Body, Headers, Message>, 'status'>>,
) : UseProxyResponse<Body, Headers, Message>;

export function UseProxyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<UseProxyResponse<Body, Headers, Message>, 'status'>> = {},
) : UseProxyResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 305}) as UseProxyResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace UseProxy {
    export const Parameters = UseProxyParameters;
    export const Parameter = UseProxyParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = UseProxyResponse<
        Body,
        Headers,
        Message
    >;
}
export default UseProxy;
