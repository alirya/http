import Response from './response';
import {CreateParameter} from './create';

export function SeeOtherParameters() : Response<303, string, {}, undefined>;

export function SeeOtherParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    303,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function SeeOtherParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    303,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return SeeOtherParameter({message, headers, body}) as Response as Response<
        303,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function SeeOtherParameter() : Response<303, string, {}, undefined>;

export function SeeOtherParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<303, Message, Headers, Body>;

export function SeeOtherParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<303, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 303}) as Response<303, Message|string, Headers|{}, Body|undefined>;
}




namespace SeeOther {
    export const Parameters = SeeOtherParameters;
    export const Parameter = SeeOtherParameter;
}
export default SeeOther;
