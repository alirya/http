import Response from './response.js';
import {CreateParameter} from './create.js';

export function PartialContentParameters() : Response<206, string, {}, undefined>;

export function PartialContentParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    206,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function PartialContentParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    206,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return PartialContentParameter({message, headers, body}) as Response as Response<
        206,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function PartialContentParameter() : Response<206, string, {}, undefined>;

export function PartialContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<206, Message, Headers, Body>;

export function PartialContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<206, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 206}) as Response<206, Message|string, Headers|{}, Body|undefined>;
}




namespace PartialContent {
    export const Parameters = PartialContentParameters;
    export const Parameter = PartialContentParameter;
}
export default PartialContent;
