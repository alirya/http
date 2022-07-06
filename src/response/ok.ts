import Response from './response.js';
import {CreateParameter} from './create.js';

export function OkParameters() : Response<200, string, {}, undefined>;

export function OkParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    200,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function OkParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    200,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return OkParameter({message, headers, body}) as Response as Response<
        200,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function OkParameter() : Response<200, string, {}, undefined>;

export function OkParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<200, Message, Headers, Body>;

export function OkParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<200, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 200}) as Response<200, Message|string, Headers|{}, Body|undefined>;
}




namespace Ok {
    export const Parameters = OkParameters;
    export const Parameter = OkParameter;
}
export default Ok;
