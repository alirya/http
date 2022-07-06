import Response from './response.js';
import {CreateParameter} from './create.js';

export function ResetContentParameters() : Response<205, string, {}, undefined>;

export function ResetContentParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    205,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function ResetContentParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    205,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ResetContentParameter({message, headers, body}) as Response as Response<
        205,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function ResetContentParameter() : Response<205, string, {}, undefined>;

export function ResetContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<205, Message, Headers, Body>;

export function ResetContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<205, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 205}) as Response<205, Message|string, Headers|{}, Body|undefined>;
}




namespace ResetContent {
    export const Parameters = ResetContentParameters;
    export const Parameter = ResetContentParameter;
}
export default ResetContent;
