import Response from './response.js';
import {CreateParameter} from './create.js';

export function MisdirectedRequestParameters() : MisdirectedRequestResponse<undefined>;

export function MisdirectedRequestParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : MisdirectedRequestResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function MisdirectedRequestParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : MisdirectedRequestResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return MisdirectedRequestParameter({message, headers, body}) as MisdirectedRequestResponse as MisdirectedRequestResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type MisdirectedRequestResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 421, Message>


export function MisdirectedRequestParameter() : MisdirectedRequestResponse<undefined>;

export function MisdirectedRequestParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<MisdirectedRequestResponse<Body, Headers, Message>, 'status'>>,
) : MisdirectedRequestResponse<Body, Headers, Message>;

export function MisdirectedRequestParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<MisdirectedRequestResponse<Body, Headers, Message>, 'status'>> = {},
) : MisdirectedRequestResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 421}) as MisdirectedRequestResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace MisdirectedRequest {
    export const Parameters = MisdirectedRequestParameters;
    export const Parameter = MisdirectedRequestParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = MisdirectedRequestResponse<
        Body,
        Headers,
        Message
    >;
}
export default MisdirectedRequest;
