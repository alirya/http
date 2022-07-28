import Response from './response';
import {CreateParameter} from './create';

export function CreatedParameters() : Response<201, string, {}, undefined>;

export function CreatedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    201,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function CreatedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    201,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return CreatedParameter({message, headers, body}) as Response as Response<
        201,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function CreatedParameter() : Response<201, string, {}, undefined>;

export function CreatedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<201, Message, Headers, Body>;

export function CreatedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<201, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 201}) as Response<201, Message|string, Headers|{}, Body|undefined>;
}




namespace Created {
    export const Parameters = CreatedParameters;
    export const Parameter = CreatedParameter;
}
export default Created;
