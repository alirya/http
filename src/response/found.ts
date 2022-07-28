import Response from './response';
import {CreateParameter} from './create';

export function FoundParameters() : Response<302, string, {}, undefined>;

export function FoundParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    302,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function FoundParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    302,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return FoundParameter({message, headers, body}) as Response as Response<
        302,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function FoundParameter() : Response<302, string, {}, undefined>;

export function FoundParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<302, Message, Headers, Body>;

export function FoundParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<302, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 302}) as Response<302, Message|string, Headers|{}, Body|undefined>;
}




namespace Found {
    export const Parameters = FoundParameters;
    export const Parameter = FoundParameter;
}
export default Found;
