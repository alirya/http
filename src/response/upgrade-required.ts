import Response from './response.js';
import {CreateParameter} from './create.js';

export function UpgradeRequiredParameters() : UpgradeRequiredResponse<undefined>;

export function UpgradeRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UpgradeRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function UpgradeRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UpgradeRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return UpgradeRequiredParameter({message, headers, body}) as UpgradeRequiredResponse as UpgradeRequiredResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type UpgradeRequiredResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 426, Message>


export function UpgradeRequiredParameter() : UpgradeRequiredResponse<undefined>;

export function UpgradeRequiredParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<UpgradeRequiredResponse<Body, Headers, Message>, 'status'>>,
) : UpgradeRequiredResponse<Body, Headers, Message>;

export function UpgradeRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<UpgradeRequiredResponse<Body, Headers, Message>, 'status'>> = {},
) : UpgradeRequiredResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 426}) as UpgradeRequiredResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace UpgradeRequired {
    export const Parameters = UpgradeRequiredParameters;
    export const Parameter = UpgradeRequiredParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = UpgradeRequiredResponse<
        Body,
        Headers,
        Message
    >;
}
export default UpgradeRequired;
