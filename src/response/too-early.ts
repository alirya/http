import Response from './response';
import {CreateParameter} from './create';

export function TooEarlyParameters() : Response<425, string, {}, undefined>;

export function TooEarlyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    425,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function TooEarlyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    425,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return TooEarlyParameter({message, headers, body}) as Response as Response<
        425,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function TooEarlyParameter() : Response<425, string, {}, undefined>;

export function TooEarlyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<425, Message, Headers, Body>;

export function TooEarlyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<425, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 425}) as Response<425, Message|string, Headers|{}, Body|undefined>;
}




namespace TooEarly {
    export const Parameters = TooEarlyParameters;
    export const Parameter = TooEarlyParameter;
}
export default TooEarly;
