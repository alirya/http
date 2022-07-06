import Response from './response.js';
import {CreateParameter} from './create.js';

export function SwitchingProtocolParameters() : Response<101, string, {}, undefined>;

export function SwitchingProtocolParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    101,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function SwitchingProtocolParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    101,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return SwitchingProtocolParameter({message, headers, body}) as Response as Response<
        101,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function SwitchingProtocolParameter() : Response<101, string, {}, undefined>;

export function SwitchingProtocolParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<101, Message, Headers, Body>;

export function SwitchingProtocolParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<101, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 101}) as Response<101, Message|string, Headers|{}, Body|undefined>;
}




namespace SwitchingProtocol {
    export const Parameters = SwitchingProtocolParameters;
    export const Parameter = SwitchingProtocolParameter;
}
export default SwitchingProtocol;
