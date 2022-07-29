import Response from './response';
import {CreateParameter} from './create';

export function UnprocessableEntityParameters() : UnprocessableEntityResponse<undefined>;

export function UnprocessableEntityParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnprocessableEntityResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function UnprocessableEntityParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnprocessableEntityResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return UnprocessableEntityParameter({message, headers, body}) as UnprocessableEntityResponse as UnprocessableEntityResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface UnprocessableEntityResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 422, Message> {

}


export function UnprocessableEntityParameter() : UnprocessableEntityResponse<undefined>;

export function UnprocessableEntityParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<UnprocessableEntityResponse<Body, Headers, Message>, 'code'>>,
) : UnprocessableEntityResponse<Body, Headers, Message>;

export function UnprocessableEntityParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<UnprocessableEntityResponse<Body, Headers, Message>, 'code'>> = {},
) : UnprocessableEntityResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 422}) as UnprocessableEntityResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace UnprocessableEntity {
    export const Parameters = UnprocessableEntityParameters;
    export const Parameter = UnprocessableEntityParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = UnprocessableEntityResponse<
        Body,
        Headers,
        Message
    >;
}
export default UnprocessableEntity;
