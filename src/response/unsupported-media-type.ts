import Response from './response';
import {CreateParameter} from './create';

export function UnsupportedMediaTypeParameters() : UnsupportedMediaTypeResponse<undefined>;

export function UnsupportedMediaTypeParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnsupportedMediaTypeResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function UnsupportedMediaTypeParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnsupportedMediaTypeResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return UnsupportedMediaTypeParameter({message, headers, body}) as UnsupportedMediaTypeResponse as UnsupportedMediaTypeResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface UnsupportedMediaTypeResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 415, Message> {

}


export function UnsupportedMediaTypeParameter() : UnsupportedMediaTypeResponse<undefined>;

export function UnsupportedMediaTypeParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<UnsupportedMediaTypeResponse<Body, Headers, Message>, 'code'>>,
) : UnsupportedMediaTypeResponse<Body, Headers, Message>;

export function UnsupportedMediaTypeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<UnsupportedMediaTypeResponse<Body, Headers, Message>, 'code'>> = {},
) : UnsupportedMediaTypeResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 415}) as UnsupportedMediaTypeResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace UnsupportedMediaType {
    export const Parameters = UnsupportedMediaTypeParameters;
    export const Parameter = UnsupportedMediaTypeParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = UnsupportedMediaTypeResponse<
        Body,
        Headers,
        Message
    >;
}
export default UnsupportedMediaType;
