import Response from './response';
import {CreateParameter} from './create';

export function UnprocessableEntityParameters() : Response<422, string, {}, undefined>;

export function UnprocessableEntityParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    422,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function UnprocessableEntityParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    422,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnprocessableEntityParameter({message, headers, body}) as Response as Response<
        422,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function UnprocessableEntityParameter() : Response<422, string, {}, undefined>;

export function UnprocessableEntityParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<422, Message, Headers, Body>;

export function UnprocessableEntityParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<422, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 422}) as Response<422, Message|string, Headers|{}, Body|undefined>;
}




namespace UnprocessableEntity {
    export const Parameters = UnprocessableEntityParameters;
    export const Parameter = UnprocessableEntityParameter;
}
export default UnprocessableEntity;
