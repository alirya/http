import Response from './response';
import {CreateParameter} from './create';

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

export interface ResetContentResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 205, Message> {

}


export function ResetContentParameter() : ResetContentResponse<undefined>;

export function ResetContentParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<ResetContentResponse<Body, Headers, Message>, 'code'>>,
) : ResetContentResponse<Body, Headers, Message>;

export function ResetContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<ResetContentResponse<Body, Headers, Message>, 'code'>> = {},
) : ResetContentResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 205}) as ResetContentResponse<Body|undefined, Headers|{}, Message|string>;
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
