import Response from './response';
import {CreateParameter} from './create';

export function ServiceUnavailableParameters() : Response<503, string, {}, undefined>;

export function ServiceUnavailableParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    503,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function ServiceUnavailableParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    503,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ServiceUnavailableParameter({message, headers, body}) as Response as Response<
        503,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function ServiceUnavailableParameter() : Response<503, string, {}, undefined>;

export function ServiceUnavailableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<503, Message, Headers, Body>;

export function ServiceUnavailableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<503, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 503}) as Response<503, Message|string, Headers|{}, Body|undefined>;
}




namespace ServiceUnavailable {
    export const Parameters = ServiceUnavailableParameters;
    export const Parameter = ServiceUnavailableParameter;
}
export default ServiceUnavailable;
