import Response from './response';
import {CreateParameter} from './create';

export function NotExtendedParameters() : Response<510, string, {}, undefined>;

export function NotExtendedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    510,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function NotExtendedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    510,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NotExtendedParameter({message, headers, body}) as Response as Response<
        510,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function NotExtendedParameter() : Response<510, string, {}, undefined>;

export function NotExtendedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<510, Message, Headers, Body>;

export function NotExtendedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<510, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 510}) as Response<510, Message|string, Headers|{}, Body|undefined>;
}




namespace NotExtended {
    export const Parameters = NotExtendedParameters;
    export const Parameter = NotExtendedParameter;
}
export default NotExtended;
