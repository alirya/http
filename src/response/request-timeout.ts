import Response from './response';
import {CreateParameter} from './create';

export function RequestTimeoutParameters() : Response<408, string, {}, undefined>;

export function RequestTimeoutParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    408,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function RequestTimeoutParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    408,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return RequestTimeoutParameter({message, headers, body}) as Response as Response<
        408,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function RequestTimeoutParameter() : Response<408, string, {}, undefined>;

export function RequestTimeoutParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<408, Message, Headers, Body>;

export function RequestTimeoutParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<408, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 408}) as Response<408, Message|string, Headers|{}, Body|undefined>;
}




namespace RequestTimeout {
    export const Parameters = RequestTimeoutParameters;
    export const Parameter = RequestTimeoutParameter;
}
export default RequestTimeout;
