import Response from './response';
import {CreateParameter} from './create';

export function UnavailableForLegalReasonsParameters() : Response<451, string, {}, undefined>;

export function UnavailableForLegalReasonsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    451,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function UnavailableForLegalReasonsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    451,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnavailableForLegalReasonsParameter({message, headers, body}) as Response as Response<
        451,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function UnavailableForLegalReasonsParameter() : Response<451, string, {}, undefined>;

export function UnavailableForLegalReasonsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<451, Message, Headers, Body>;

export function UnavailableForLegalReasonsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<451, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 451}) as Response<451, Message|string, Headers|{}, Body|undefined>;
}




namespace UnavailableForLegalReasons {
    export const Parameters = UnavailableForLegalReasonsParameters;
    export const Parameter = UnavailableForLegalReasonsParameter;
}
export default UnavailableForLegalReasons;
