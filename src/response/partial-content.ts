import Response from './response.js';
import {CreateParameter} from './create.js';

export function PartialContentParameters() : PartialContentResponse<undefined>;

export function PartialContentParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PartialContentResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function PartialContentParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PartialContentResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return PartialContentParameter({message, headers, body}) as PartialContentResponse as PartialContentResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type PartialContentResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 206, Message>


export function PartialContentParameter() : PartialContentResponse<undefined>;

export function PartialContentParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<PartialContentResponse<Body, Headers, Message>, 'status'>>,
) : PartialContentResponse<Body, Headers, Message>;

export function PartialContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<PartialContentResponse<Body, Headers, Message>, 'status'>> = {},
) : PartialContentResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 206}) as PartialContentResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace PartialContent {
    export const Parameters = PartialContentParameters;
    export const Parameter = PartialContentParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = PartialContentResponse<
        Body,
        Headers,
        Message
    >;
}
export default PartialContent;
