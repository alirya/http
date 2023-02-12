import Response from './response.js';
import {CreateParameter} from './create.js';

export function UnavailableForLegalReasonsParameters() : UnavailableForLegalReasonsResponse<undefined>;

export function UnavailableForLegalReasonsParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnavailableForLegalReasonsResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function UnavailableForLegalReasonsParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnavailableForLegalReasonsResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return UnavailableForLegalReasonsParameter({message, headers, body}) as UnavailableForLegalReasonsResponse as UnavailableForLegalReasonsResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type UnavailableForLegalReasonsResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 451, Message>


export function UnavailableForLegalReasonsParameter() : UnavailableForLegalReasonsResponse<undefined>;

export function UnavailableForLegalReasonsParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<UnavailableForLegalReasonsResponse<Body, Headers, Message>, 'status'>>,
) : UnavailableForLegalReasonsResponse<Body, Headers, Message>;

export function UnavailableForLegalReasonsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<UnavailableForLegalReasonsResponse<Body, Headers, Message>, 'status'>> = {},
) : UnavailableForLegalReasonsResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 451}) as UnavailableForLegalReasonsResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace UnavailableForLegalReasons {
    export const Parameters = UnavailableForLegalReasonsParameters;
    export const Parameter = UnavailableForLegalReasonsParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = UnavailableForLegalReasonsResponse<
        Body,
        Headers,
        Message
    >;
}
export default UnavailableForLegalReasons;
