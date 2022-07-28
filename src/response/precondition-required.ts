import Response from './response';
import {CreateParameter} from './create';

export function PreconditionRequiredParameters() : Response<428, string, {}, undefined>;

export function PreconditionRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    428,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function PreconditionRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    428,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return PreconditionRequiredParameter({message, headers, body}) as Response as Response<
        428,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function PreconditionRequiredParameter() : Response<428, string, {}, undefined>;

export function PreconditionRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<428, Message, Headers, Body>;

export function PreconditionRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<428, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 428}) as Response<428, Message|string, Headers|{}, Body|undefined>;
}




namespace PreconditionRequired {
    export const Parameters = PreconditionRequiredParameters;
    export const Parameter = PreconditionRequiredParameter;
}
export default PreconditionRequired;
