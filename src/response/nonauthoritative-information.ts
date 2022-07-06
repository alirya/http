import Response from './response.js';
import {CreateParameter} from './create.js';

export function NonauthoritativeInformationParameters() : Response<203, string, {}, undefined>;

export function NonauthoritativeInformationParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    203,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function NonauthoritativeInformationParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    203,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NonauthoritativeInformationParameter({message, headers, body}) as Response as Response<
        203,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function NonauthoritativeInformationParameter() : Response<203, string, {}, undefined>;

export function NonauthoritativeInformationParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<203, Message, Headers, Body>;

export function NonauthoritativeInformationParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<203, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 203}) as Response<203, Message|string, Headers|{}, Body|undefined>;
}




namespace NonauthoritativeInformation {
    export const Parameters = NonauthoritativeInformationParameters;
    export const Parameter = NonauthoritativeInformationParameter;
}
export default NonauthoritativeInformation;
