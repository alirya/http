import Response from './response.js';
import {CreateParameter} from './create.js';

export function ServiceUnavailableParameters() : ServiceUnavailableResponse<undefined>;

export function ServiceUnavailableParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ServiceUnavailableResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function ServiceUnavailableParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ServiceUnavailableResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return ServiceUnavailableParameter({message, headers, body}) as ServiceUnavailableResponse as ServiceUnavailableResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type ServiceUnavailableResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 503, Message>


export function ServiceUnavailableParameter() : ServiceUnavailableResponse<undefined>;

export function ServiceUnavailableParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<ServiceUnavailableResponse<Body, Headers, Message>, 'status'>>,
) : ServiceUnavailableResponse<Body, Headers, Message>;

export function ServiceUnavailableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<ServiceUnavailableResponse<Body, Headers, Message>, 'status'>> = {},
) : ServiceUnavailableResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 503}) as ServiceUnavailableResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace ServiceUnavailable {
    export const Parameters = ServiceUnavailableParameters;
    export const Parameter = ServiceUnavailableParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = ServiceUnavailableResponse<
        Body,
        Headers,
        Message
    >;
}
export default ServiceUnavailable;
