import Response from './response';
import {CreateParameter} from './create';

export function LengthRequiredParameters() : LengthRequiredResponse<undefined>;

export function LengthRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : LengthRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function LengthRequiredParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : LengthRequiredResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return LengthRequiredParameter({message, headers, body}) as LengthRequiredResponse as LengthRequiredResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface LengthRequiredResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 411, Message> {

}


export function LengthRequiredParameter() : LengthRequiredResponse<undefined>;

export function LengthRequiredParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<LengthRequiredResponse<Body, Headers, Message>, 'code'>>,
) : LengthRequiredResponse<Body, Headers, Message>;

export function LengthRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<LengthRequiredResponse<Body, Headers, Message>, 'code'>> = {},
) : LengthRequiredResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 411}) as LengthRequiredResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace LengthRequired {
    export const Parameters = LengthRequiredParameters;
    export const Parameter = LengthRequiredParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = LengthRequiredResponse<
        Body,
        Headers,
        Message
    >;
}
export default LengthRequired;
