import Response from './response';
import {CreateParameter} from './create';

export function InsufficientStorageParameters() : Response<507, string, {}, undefined>;

export function InsufficientStorageParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    507,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function InsufficientStorageParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    507,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return InsufficientStorageParameter({message, headers, body}) as Response as Response<
        507,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function InsufficientStorageParameter() : Response<507, string, {}, undefined>;

export function InsufficientStorageParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<507, Message, Headers, Body>;

export function InsufficientStorageParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<507, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 507}) as Response<507, Message|string, Headers|{}, Body|undefined>;
}




namespace InsufficientStorage {
    export const Parameters = InsufficientStorageParameters;
    export const Parameter = InsufficientStorageParameter;
}
export default InsufficientStorage;
