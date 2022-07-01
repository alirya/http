import Response from './response';
import {CreateParameter} from './create';

export function ExpectationFailedParameters() : Response<417, string, {}, undefined>;

export function ExpectationFailedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    417,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function ExpectationFailedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    417,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ExpectationFailedParameter({message, headers, body}) as Response as Response<
        417,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function ExpectationFailedParameter() : Response<417, string, {}, undefined>;

export function ExpectationFailedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<417, Message, Headers, Body>;

export function ExpectationFailedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<417, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 417}) as Response<417, Message|string, Headers|{}, Body|undefined>;
}




namespace ExpectationFailed {
    export const Parameters = ExpectationFailedParameters;
    export const Parameter = ExpectationFailedParameter;
}
export default ExpectationFailed;
