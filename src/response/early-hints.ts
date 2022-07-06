import Response from './response.js';
import {CreateParameter} from './create.js';

export function EarlyHintsParameters() : Response<103, string, {}, undefined>;

export function EarlyHintsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    103,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function EarlyHintsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    103,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return EarlyHintsParameter({message, headers, body}) as Response as Response<
        103,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function EarlyHintsParameter() : Response<103, string, {}, undefined>;

export function EarlyHintsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<103, Message, Headers, Body>;

export function EarlyHintsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<103, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 103}) as Response<103, Message|string, Headers|{}, Body|undefined>;
}




namespace EarlyHints {
    export const Parameters = EarlyHintsParameters;
    export const Parameter = EarlyHintsParameter;
}
export default EarlyHints;
