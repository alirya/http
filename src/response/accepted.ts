import Response from './response';
import {CreateParameter} from './create';

export function AcceptedParameters() : AcceptedResponse<undefined>;

export function AcceptedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : AcceptedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function AcceptedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : AcceptedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return AcceptedParameter({message, headers, body}) as AcceptedResponse as AcceptedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface AcceptedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 202, Message> {

}


export function AcceptedParameter() : AcceptedResponse<undefined>;

export function AcceptedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<AcceptedResponse<Body, Headers, Message>, 'status'>>,
) : AcceptedResponse<Body, Headers, Message>;

export function AcceptedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<AcceptedResponse<Body, Headers, Message>, 'status'>> = {},
) : AcceptedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 202}) as AcceptedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Accepted {
    export const Parameters = AcceptedParameters;
    export const Parameter = AcceptedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = AcceptedResponse<
        Body,
        Headers,
        Message
    >;
}
export default Accepted;
