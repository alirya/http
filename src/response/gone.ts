import Response from './response.js';
import {CreateParameter} from './create.js';

export function GoneParameters() : GoneResponse<undefined>;

export function GoneParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : GoneResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function GoneParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : GoneResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return GoneParameter({message, headers, body}) as GoneResponse as GoneResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type GoneResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 410, Message>


export function GoneParameter() : GoneResponse<undefined>;

export function GoneParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<GoneResponse<Body, Headers, Message>, 'status'>>,
) : GoneResponse<Body, Headers, Message>;

export function GoneParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<GoneResponse<Body, Headers, Message>, 'status'>> = {},
) : GoneResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 410}) as GoneResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Gone {
    export const Parameters = GoneParameters;
    export const Parameter = GoneParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = GoneResponse<
        Body,
        Headers,
        Message
    >;
}
export default Gone;
