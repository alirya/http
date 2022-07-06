import Response from './response.js';
import {CreateParameter} from './create.js';

export function GoneParameters() : Response<410, string, {}, undefined>;

export function GoneParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    410,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function GoneParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    410,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return GoneParameter({message, headers, body}) as Response as Response<
        410,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function GoneParameter() : Response<410, string, {}, undefined>;

export function GoneParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<410, Message, Headers, Body>;

export function GoneParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<410, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 410}) as Response<410, Message|string, Headers|{}, Body|undefined>;
}




namespace Gone {
    export const Parameters = GoneParameters;
    export const Parameter = GoneParameter;
}
export default Gone;
