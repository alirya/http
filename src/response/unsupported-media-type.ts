import Response from './response';
import {CreateParameter} from './create';

export function UnsupportedMediaTypeParameters() : Response<415, string, {}, undefined>;

export function UnsupportedMediaTypeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    415,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function UnsupportedMediaTypeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    415,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnsupportedMediaTypeParameter({message, headers, body}) as Response as Response<
        415,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function UnsupportedMediaTypeParameter() : Response<415, string, {}, undefined>;

export function UnsupportedMediaTypeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<415, Message, Headers, Body>;

export function UnsupportedMediaTypeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<415, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 415}) as Response<415, Message|string, Headers|{}, Body|undefined>;
}




namespace UnsupportedMediaType {
    export const Parameters = UnsupportedMediaTypeParameters;
    export const Parameter = UnsupportedMediaTypeParameter;
}
export default UnsupportedMediaType;
