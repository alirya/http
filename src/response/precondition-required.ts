import Response from './response.js';
import {CreateParameter} from './create.js';

export function PreconditionRequiredParameters() : PreconditionRequiredResponse<undefined>;

export function PreconditionRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PreconditionRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function PreconditionRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : PreconditionRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return PreconditionRequiredParameter({message, headers, body}) as PreconditionRequiredResponse as PreconditionRequiredResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type PreconditionRequiredResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 428, Message>


export function PreconditionRequiredParameter() : PreconditionRequiredResponse<undefined>;

export function PreconditionRequiredParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<PreconditionRequiredResponse<Body, Headers, Message>, 'status'>>,
) : PreconditionRequiredResponse<Body, Headers, Message>;

export function PreconditionRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<PreconditionRequiredResponse<Body, Headers, Message>, 'status'>> = {},
) : PreconditionRequiredResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 428}) as PreconditionRequiredResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace PreconditionRequired {
    export const Parameters = PreconditionRequiredParameters;
    export const Parameter = PreconditionRequiredParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = PreconditionRequiredResponse<
        Body,
        Headers,
        Message
    >;
}
export default PreconditionRequired;
