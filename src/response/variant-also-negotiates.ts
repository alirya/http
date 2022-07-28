import Response from './response';
import {CreateParameter} from './create';

export function VariantAlsoNegotiatesParameters() : Response<506, string, {}, undefined>;

export function VariantAlsoNegotiatesParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    506,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function VariantAlsoNegotiatesParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    506,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return VariantAlsoNegotiatesParameter({message, headers, body}) as Response as Response<
        506,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function VariantAlsoNegotiatesParameter() : Response<506, string, {}, undefined>;

export function VariantAlsoNegotiatesParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<506, Message, Headers, Body>;

export function VariantAlsoNegotiatesParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<506, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 506}) as Response<506, Message|string, Headers|{}, Body|undefined>;
}




namespace VariantAlsoNegotiates {
    export const Parameters = VariantAlsoNegotiatesParameters;
    export const Parameter = VariantAlsoNegotiatesParameter;
}
export default VariantAlsoNegotiates;
