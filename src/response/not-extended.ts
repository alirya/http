import Response from './response';
import {CreateParameter} from './create';

export function NotExtendedParameters() : NotExtendedResponse<undefined>;

export function NotExtendedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NotExtendedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function NotExtendedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NotExtendedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return NotExtendedParameter({message, headers, body}) as NotExtendedResponse as NotExtendedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface NotExtendedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 510, Message> {

}


export function NotExtendedParameter() : NotExtendedResponse<undefined>;

export function NotExtendedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<NotExtendedResponse<Body, Headers, Message>, 'status'>>,
) : NotExtendedResponse<Body, Headers, Message>;

export function NotExtendedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<NotExtendedResponse<Body, Headers, Message>, 'status'>> = {},
) : NotExtendedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 510}) as NotExtendedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace NotExtended {
    export const Parameters = NotExtendedParameters;
    export const Parameter = NotExtendedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = NotExtendedResponse<
        Body,
        Headers,
        Message
    >;
}
export default NotExtended;
