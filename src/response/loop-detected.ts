import Response from './response.js';
import {CreateParameter} from './create.js';

export function LoopDetectedParameters() : Response<508, string, {}, undefined>;

export function LoopDetectedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    508,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function LoopDetectedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    508,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return LoopDetectedParameter({message, headers, body}) as Response as Response<
        508,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function LoopDetectedParameter() : Response<508, string, {}, undefined>;

export function LoopDetectedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<508, Message, Headers, Body>;

export function LoopDetectedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<508, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 508}) as Response<508, Message|string, Headers|{}, Body|undefined>;
}




namespace LoopDetected {
    export const Parameters = LoopDetectedParameters;
    export const Parameter = LoopDetectedParameter;
}
export default LoopDetected;
