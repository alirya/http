import Response from './response.js';
import {CreateParameter} from './create.js';

export function SeeOtherParameters() : SeeOtherResponse<undefined>;

export function SeeOtherParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : SeeOtherResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function SeeOtherParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : SeeOtherResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return SeeOtherParameter({message, headers, body}) as SeeOtherResponse as SeeOtherResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type SeeOtherResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 303, Message>


export function SeeOtherParameter() : SeeOtherResponse<undefined>;

export function SeeOtherParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<SeeOtherResponse<Body, Headers, Message>, 'status'>>,
) : SeeOtherResponse<Body, Headers, Message>;

export function SeeOtherParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<SeeOtherResponse<Body, Headers, Message>, 'status'>> = {},
) : SeeOtherResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 303}) as SeeOtherResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace SeeOther {
    export const Parameters = SeeOtherParameters;
    export const Parameter = SeeOtherParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = SeeOtherResponse<
        Body,
        Headers,
        Message
    >;
}
export default SeeOther;
