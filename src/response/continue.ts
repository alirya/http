import Response from './response.js';
import {CreateParameter} from './create.js';

export function ContinueParameters() : Response<100, string, {}, undefined>;

export function ContinueParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    100,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function ContinueParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    100,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ContinueParameter({message, headers, body}) as Response as Response<
        100,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function ContinueParameter() : Response<100, string, {}, undefined>;

export function ContinueParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<100, Message, Headers, Body>;

export function ContinueParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<100, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 100}) as Response<100, Message|string, Headers|{}, Body|undefined>;
}




namespace Continue {
    export const Parameters = ContinueParameters;
    export const Parameter = ContinueParameter;
}
export default Continue;
