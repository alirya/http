import Response from './response.js';
import {CreateParameter} from './create.js';

export function ImATeapotParameters() : ImATeapotResponse<undefined>;

export function ImATeapotParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ImATeapotResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function ImATeapotParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ImATeapotResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return ImATeapotParameter({message, headers, body}) as ImATeapotResponse as ImATeapotResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type ImATeapotResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 418, Message>


export function ImATeapotParameter() : ImATeapotResponse<undefined>;

export function ImATeapotParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<ImATeapotResponse<Body, Headers, Message>, 'status'>>,
) : ImATeapotResponse<Body, Headers, Message>;

export function ImATeapotParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<ImATeapotResponse<Body, Headers, Message>, 'status'>> = {},
) : ImATeapotResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 418}) as ImATeapotResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace ImATeapot {
    export const Parameters = ImATeapotParameters;
    export const Parameter = ImATeapotParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = ImATeapotResponse<
        Body,
        Headers,
        Message
    >;
}
export default ImATeapot;
