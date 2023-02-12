import Response from './response.js';
import {CreateParameter} from './create.js';

export function VariantAlsoNegotiatesParameters() : VariantAlsoNegotiatesResponse<undefined>;

export function VariantAlsoNegotiatesParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : VariantAlsoNegotiatesResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function VariantAlsoNegotiatesParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : VariantAlsoNegotiatesResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return VariantAlsoNegotiatesParameter({message, headers, body}) as VariantAlsoNegotiatesResponse as VariantAlsoNegotiatesResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type VariantAlsoNegotiatesResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 506, Message>


export function VariantAlsoNegotiatesParameter() : VariantAlsoNegotiatesResponse<undefined>;

export function VariantAlsoNegotiatesParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<VariantAlsoNegotiatesResponse<Body, Headers, Message>, 'status'>>,
) : VariantAlsoNegotiatesResponse<Body, Headers, Message>;

export function VariantAlsoNegotiatesParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<VariantAlsoNegotiatesResponse<Body, Headers, Message>, 'status'>> = {},
) : VariantAlsoNegotiatesResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 506}) as VariantAlsoNegotiatesResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace VariantAlsoNegotiates {
    export const Parameters = VariantAlsoNegotiatesParameters;
    export const Parameter = VariantAlsoNegotiatesParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = VariantAlsoNegotiatesResponse<
        Body,
        Headers,
        Message
    >;
}
export default VariantAlsoNegotiates;
