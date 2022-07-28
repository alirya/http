import Response from './response';
import {CreateParameter} from './create';

export function LengthRequiredParameters() : Response<411, string, {}, undefined>;

export function LengthRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    411,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function LengthRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    411,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return LengthRequiredParameter({message, headers, body}) as Response as Response<
        411,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function LengthRequiredParameter() : Response<411, string, {}, undefined>;

export function LengthRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<411, Message, Headers, Body>;

export function LengthRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<411, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 411}) as Response<411, Message|string, Headers|{}, Body|undefined>;
}




namespace LengthRequired {
    export const Parameters = LengthRequiredParameters;
    export const Parameter = LengthRequiredParameter;
}
export default LengthRequired;
