import Response from './response.js';
import {CreateParameter} from './create.js';

export function PreconditionFailedParameters() : Response<412, string, {}, undefined>;

export function PreconditionFailedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    412,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function PreconditionFailedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    412,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return PreconditionFailedParameter({message, headers, body}) as Response as Response<
        412,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function PreconditionFailedParameter() : Response<412, string, {}, undefined>;

export function PreconditionFailedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<412, Message, Headers, Body>;

export function PreconditionFailedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<412, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 412}) as Response<412, Message|string, Headers|{}, Body|undefined>;
}




namespace PreconditionFailed {
    export const Parameters = PreconditionFailedParameters;
    export const Parameter = PreconditionFailedParameter;
}
export default PreconditionFailed;
