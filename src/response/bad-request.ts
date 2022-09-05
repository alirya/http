import Response from './response';
import {CreateParameter} from './create';

export function BadRequestParameters() : BadRequestResponse<undefined>;

export function BadRequestParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : BadRequestResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function BadRequestParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : BadRequestResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return BadRequestParameter({message, headers, body}) as BadRequestResponse as BadRequestResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface BadRequestResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 400, Message> {

}


export function BadRequestParameter() : BadRequestResponse<undefined>;

export function BadRequestParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<BadRequestResponse<Body, Headers, Message>, 'status'>>,
) : BadRequestResponse<Body, Headers, Message>;

export function BadRequestParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<BadRequestResponse<Body, Headers, Message>, 'status'>> = {},
) : BadRequestResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 400}) as BadRequestResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace BadRequest {
    export const Parameters = BadRequestParameters;
    export const Parameter = BadRequestParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = BadRequestResponse<
        Body,
        Headers,
        Message
    >;
}
export default BadRequest;
