import Response from './response';
import {CreateParameter} from './create';

export function MisdirectedRequestParameters() : Response<421, string, {}, undefined>;

export function MisdirectedRequestParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    421,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function MisdirectedRequestParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    421,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return MisdirectedRequestParameter({message, headers, body}) as Response as Response<
        421,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function MisdirectedRequestParameter() : Response<421, string, {}, undefined>;

export function MisdirectedRequestParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<421, Message, Headers, Body>;

export function MisdirectedRequestParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<421, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 421}) as Response<421, Message|string, Headers|{}, Body|undefined>;
}




namespace MisdirectedRequest {
    export const Parameters = MisdirectedRequestParameters;
    export const Parameter = MisdirectedRequestParameter;
}
export default MisdirectedRequest;
