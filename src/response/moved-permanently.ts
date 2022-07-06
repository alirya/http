import Response from './response.js';
import {CreateParameter} from './create.js';

export function MovedPermanentlyParameters() : Response<301, string, {}, undefined>;

export function MovedPermanentlyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    301,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function MovedPermanentlyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    301,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return MovedPermanentlyParameter({message, headers, body}) as Response as Response<
        301,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function MovedPermanentlyParameter() : Response<301, string, {}, undefined>;

export function MovedPermanentlyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<301, Message, Headers, Body>;

export function MovedPermanentlyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<301, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 301}) as Response<301, Message|string, Headers|{}, Body|undefined>;
}




namespace MovedPermanently {
    export const Parameters = MovedPermanentlyParameters;
    export const Parameter = MovedPermanentlyParameter;
}
export default MovedPermanently;
