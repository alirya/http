import Response from './response.js';
import {CreateParameter} from './create.js';

export function RangeNotSatisfiableParameters() : Response<416, string, {}, undefined>;

export function RangeNotSatisfiableParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    416,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function RangeNotSatisfiableParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    416,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return RangeNotSatisfiableParameter({message, headers, body}) as Response as Response<
        416,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function RangeNotSatisfiableParameter() : Response<416, string, {}, undefined>;

export function RangeNotSatisfiableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<416, Message, Headers, Body>;

export function RangeNotSatisfiableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<416, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 416}) as Response<416, Message|string, Headers|{}, Body|undefined>;
}




namespace RangeNotSatisfiable {
    export const Parameters = RangeNotSatisfiableParameters;
    export const Parameter = RangeNotSatisfiableParameter;
}
export default RangeNotSatisfiable;
