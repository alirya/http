import Response from './response';
import {CreateParameter} from './create';

export function LoopDetectedParameters() : LoopDetectedResponse<undefined>;

export function LoopDetectedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : LoopDetectedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function LoopDetectedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : LoopDetectedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return LoopDetectedParameter({message, headers, body}) as LoopDetectedResponse as LoopDetectedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface LoopDetectedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 508, Message> {

}


export function LoopDetectedParameter() : LoopDetectedResponse<undefined>;

export function LoopDetectedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<LoopDetectedResponse<Body, Headers, Message>, 'code'>>,
) : LoopDetectedResponse<Body, Headers, Message>;

export function LoopDetectedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<LoopDetectedResponse<Body, Headers, Message>, 'code'>> = {},
) : LoopDetectedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 508}) as LoopDetectedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace LoopDetected {
    export const Parameters = LoopDetectedParameters;
    export const Parameter = LoopDetectedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = LoopDetectedResponse<
        Body,
        Headers,
        Message
    >;
}
export default LoopDetected;
