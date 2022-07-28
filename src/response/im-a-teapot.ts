import Response from './response';
import {CreateParameter} from './create';

export function ImATeapotParameters() : Response<418, string, {}, undefined>;

export function ImATeapotParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    418,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function ImATeapotParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    418,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ImATeapotParameter({message, headers, body}) as Response as Response<
        418,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function ImATeapotParameter() : Response<418, string, {}, undefined>;

export function ImATeapotParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<418, Message, Headers, Body>;

export function ImATeapotParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<418, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 418}) as Response<418, Message|string, Headers|{}, Body|undefined>;
}




namespace ImATeapot {
    export const Parameters = ImATeapotParameters;
    export const Parameter = ImATeapotParameter;
}
export default ImATeapot;
