import Response from './response.js';
import {CreateParameter} from './create.js';

export function ResetContentParameters() : ResetContentResponse<undefined>;

export function ResetContentParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ResetContentResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function ResetContentParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ResetContentResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return ResetContentParameter({message, headers, body}) as ResetContentResponse as ResetContentResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type ResetContentResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 205, Message>


export function ResetContentParameter() : ResetContentResponse<undefined>;

export function ResetContentParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<ResetContentResponse<Body, Headers, Message>, 'status'>>,
) : ResetContentResponse<Body, Headers, Message>;

export function ResetContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<ResetContentResponse<Body, Headers, Message>, 'status'>> = {},
) : ResetContentResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 205}) as ResetContentResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace ResetContent {
    export const Parameters = ResetContentParameters;
    export const Parameter = ResetContentParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = ResetContentResponse<
        Body,
        Headers,
        Message
    >;
}
export default ResetContent;
