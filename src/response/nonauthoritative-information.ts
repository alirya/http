import Response from './response';
import {CreateParameter} from './create';

export function NonauthoritativeInformationParameters() : NonauthoritativeInformationResponse<undefined>;

export function NonauthoritativeInformationParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NonauthoritativeInformationResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function NonauthoritativeInformationParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NonauthoritativeInformationResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return NonauthoritativeInformationParameter({message, headers, body}) as NonauthoritativeInformationResponse as NonauthoritativeInformationResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface NonauthoritativeInformationResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 203, Message> {

}


export function NonauthoritativeInformationParameter() : NonauthoritativeInformationResponse<undefined>;

export function NonauthoritativeInformationParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<NonauthoritativeInformationResponse<Body, Headers, Message>, 'status'>>,
) : NonauthoritativeInformationResponse<Body, Headers, Message>;

export function NonauthoritativeInformationParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<NonauthoritativeInformationResponse<Body, Headers, Message>, 'status'>> = {},
) : NonauthoritativeInformationResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 203}) as NonauthoritativeInformationResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace NonauthoritativeInformation {
    export const Parameters = NonauthoritativeInformationParameters;
    export const Parameter = NonauthoritativeInformationParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = NonauthoritativeInformationResponse<
        Body,
        Headers,
        Message
    >;
}
export default NonauthoritativeInformation;
