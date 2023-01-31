import Response from './response';
import {CreateParameter} from './create';

export function InsufficientStorageParameters() : InsufficientStorageResponse<undefined>;

export function InsufficientStorageParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : InsufficientStorageResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function InsufficientStorageParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : InsufficientStorageResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return InsufficientStorageParameter({message, headers, body}) as InsufficientStorageResponse as InsufficientStorageResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface InsufficientStorageResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 507, Message> {

}


export function InsufficientStorageParameter() : InsufficientStorageResponse<undefined>;

export function InsufficientStorageParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<InsufficientStorageResponse<Body, Headers, Message>, 'status'>>,
) : InsufficientStorageResponse<Body, Headers, Message>;

export function InsufficientStorageParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<InsufficientStorageResponse<Body, Headers, Message>, 'status'>> = {},
) : InsufficientStorageResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 507}) as InsufficientStorageResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace InsufficientStorage {
    export const Parameters = InsufficientStorageParameters;
    export const Parameter = InsufficientStorageParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = InsufficientStorageResponse<
        Body,
        Headers,
        Message
    >;
}
export default InsufficientStorage;
