import Response from './response';
import {CreateParameter} from './create';

export function InternalServerErrorParameters() : Response<500, string, {}, undefined>;

export function InternalServerErrorParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    500,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function InternalServerErrorParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    500,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return InternalServerErrorParameter({message, headers, body}) as Response as Response<
        500,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function InternalServerErrorParameter() : Response<500, string, {}, undefined>;

export function InternalServerErrorParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<500, Message, Headers, Body>;

export function InternalServerErrorParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<500, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 500}) as Response<500, Message|string, Headers|{}, Body|undefined>;
}




namespace InternalServerError {
    export const Parameters = InternalServerErrorParameters;
    export const Parameter = InternalServerErrorParameter;
}
export default InternalServerError;
