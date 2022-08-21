import Response from './response';
import {CreateParameter} from './create';

export function HttpVersionNotSupportedParameters() : HttpVersionNotSupportedResponse<undefined>;

export function HttpVersionNotSupportedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : HttpVersionNotSupportedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function HttpVersionNotSupportedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : HttpVersionNotSupportedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return HttpVersionNotSupportedParameter({message, headers, body}) as HttpVersionNotSupportedResponse as HttpVersionNotSupportedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface HttpVersionNotSupportedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 505, Message> {

}


export function HttpVersionNotSupportedParameter() : HttpVersionNotSupportedResponse<undefined>;

export function HttpVersionNotSupportedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<HttpVersionNotSupportedResponse<Body, Headers, Message>, 'code'>>,
) : HttpVersionNotSupportedResponse<Body, Headers, Message>;

export function HttpVersionNotSupportedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<HttpVersionNotSupportedResponse<Body, Headers, Message>, 'code'>> = {},
) : HttpVersionNotSupportedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 505}) as HttpVersionNotSupportedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace HttpVersionNotSupported {
    export const Parameters = HttpVersionNotSupportedParameters;
    export const Parameter = HttpVersionNotSupportedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = HttpVersionNotSupportedResponse<
        Body,
        Headers,
        Message
    >;
}
export default HttpVersionNotSupported;
