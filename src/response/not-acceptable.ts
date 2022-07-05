import Response from './response';
import {CreateParameter} from './create';

export function NotAcceptableParameters() : Response<406, string, {}, undefined>;

export function NotAcceptableParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    406,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function NotAcceptableParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    406,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NotAcceptableParameter({message, headers, body}) as Response as Response<
        406,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function NotAcceptableParameter() : Response<406, string, {}, undefined>;

export function NotAcceptableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<406, Message, Headers, Body>;

export function NotAcceptableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<406, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 406}) as Response<406, Message|string, Headers|{}, Body|undefined>;
}




namespace NotAcceptable {
    export const Parameters = NotAcceptableParameters;
    export const Parameter = NotAcceptableParameter;
}
export default NotAcceptable;
