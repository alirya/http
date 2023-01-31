import Response from './response';
import {CreateParameter} from './create';

export function PreconditionFailedParameters() : PreconditionFailedResponse<undefined>;

export function PreconditionFailedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PreconditionFailedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function PreconditionFailedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PreconditionFailedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return PreconditionFailedParameter({message, headers, body}) as PreconditionFailedResponse as PreconditionFailedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface PreconditionFailedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 412, Message> {

}


export function PreconditionFailedParameter() : PreconditionFailedResponse<undefined>;

export function PreconditionFailedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<PreconditionFailedResponse<Body, Headers, Message>, 'status'>>,
) : PreconditionFailedResponse<Body, Headers, Message>;

export function PreconditionFailedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<PreconditionFailedResponse<Body, Headers, Message>, 'status'>> = {},
) : PreconditionFailedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 412}) as PreconditionFailedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace PreconditionFailed {
    export const Parameters = PreconditionFailedParameters;
    export const Parameter = PreconditionFailedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = PreconditionFailedResponse<
        Body,
        Headers,
        Message
    >;
}
export default PreconditionFailed;
