import Response from './response.js';
import {CreateParameter} from './create.js';

export function AcceptedParameters() : Response<202, string, {}, undefined>;

export function AcceptedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    202,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function AcceptedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    202,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return AcceptedParameter({message, headers, body}) as Response as Response<
        202,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function AcceptedParameter() : Response<202, string, {}, undefined>;

export function AcceptedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<202, Message, Headers, Body>;

export function AcceptedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<202, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 202}) as Response<202, Message|string, Headers|{}, Body|undefined>;
}




namespace Accepted {
    export const Parameters = AcceptedParameters;
    export const Parameter = AcceptedParameter;
}
export default Accepted;
