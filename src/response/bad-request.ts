import Response from './response';
import {CreateParameter} from './create';

export function BadRequestParameters() : Response<400, string, {}, undefined>;

export function BadRequestParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    400,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function BadRequestParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    400,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return BadRequestParameter({message, headers, body}) as Response as Response<
        400,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function BadRequestParameter() : Response<400, string, {}, undefined>;

export function BadRequestParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<400, Message, Headers, Body>;

export function BadRequestParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<400, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 400}) as Response<400, Message|string, Headers|{}, Body|undefined>;
}




namespace BadRequest {
    export const Parameters = BadRequestParameters;
    export const Parameter = BadRequestParameter;
}
export default BadRequest;
