import Response from './response';
import {CreateParameter} from './create';

export function EarlyHintsParameters() : EarlyHintsResponse<undefined>;

export function EarlyHintsParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : EarlyHintsResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function EarlyHintsParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : EarlyHintsResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return EarlyHintsParameter({message, headers, body}) as EarlyHintsResponse as EarlyHintsResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface EarlyHintsResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 103, Message> {

}


export function EarlyHintsParameter() : EarlyHintsResponse<undefined>;

export function EarlyHintsParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<EarlyHintsResponse<Body, Headers, Message>, 'status'>>,
) : EarlyHintsResponse<Body, Headers, Message>;

export function EarlyHintsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<EarlyHintsResponse<Body, Headers, Message>, 'status'>> = {},
) : EarlyHintsResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 103}) as EarlyHintsResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace EarlyHints {
    export const Parameters = EarlyHintsParameters;
    export const Parameter = EarlyHintsParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = EarlyHintsResponse<
        Body,
        Headers,
        Message
    >;
}
export default EarlyHints;
