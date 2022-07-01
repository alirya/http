import Response from './response';
import {CreateParameter} from './create';

export function NotImplementedParameters() : Response<501, string, {}, undefined>;

export function NotImplementedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    501,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function NotImplementedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    501,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NotImplementedParameter({message, headers, body}) as Response as Response<
        501,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function NotImplementedParameter() : Response<501, string, {}, undefined>;

export function NotImplementedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<501, Message, Headers, Body>;

export function NotImplementedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<501, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 501}) as Response<501, Message|string, Headers|{}, Body|undefined>;
}




namespace NotImplemented {
    export const Parameters = NotImplementedParameters;
    export const Parameter = NotImplementedParameter;
}
export default NotImplemented;
