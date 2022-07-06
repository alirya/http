import Response from './response.js';
import {CreateParameter} from './create.js';

export function UnusedParameters() : Response<306, string, {}, undefined>;

export function UnusedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    306,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function UnusedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    306,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnusedParameter({message, headers, body}) as Response as Response<
        306,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function UnusedParameter() : Response<306, string, {}, undefined>;

export function UnusedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<306, Message, Headers, Body>;

export function UnusedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<306, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 306}) as Response<306, Message|string, Headers|{}, Body|undefined>;
}




namespace Unused {
    export const Parameters = UnusedParameters;
    export const Parameter = UnusedParameter;
}
export default Unused;
