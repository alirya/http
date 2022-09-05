import Response from './response';
import {CreateParameter} from './create';

export function NoContentParameters() : NoContentResponse<undefined>;

export function NoContentParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NoContentResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function NoContentParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NoContentResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return NoContentParameter({message, headers, body}) as NoContentResponse as NoContentResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface NoContentResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 204, Message> {

}


export function NoContentParameter() : NoContentResponse<undefined>;

export function NoContentParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<NoContentResponse<Body, Headers, Message>, 'status'>>,
) : NoContentResponse<Body, Headers, Message>;

export function NoContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<NoContentResponse<Body, Headers, Message>, 'status'>> = {},
) : NoContentResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 204}) as NoContentResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace NoContent {
    export const Parameters = NoContentParameters;
    export const Parameter = NoContentParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = NoContentResponse<
        Body,
        Headers,
        Message
    >;
}
export default NoContent;
