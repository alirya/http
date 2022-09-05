import Response from './response';
import {CreateParameter} from './create';

export function ConflictParameters() : ConflictResponse<undefined>;

export function ConflictParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ConflictResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function ConflictParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ConflictResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return ConflictParameter({message, headers, body}) as ConflictResponse as ConflictResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface ConflictResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 409, Message> {

}


export function ConflictParameter() : ConflictResponse<undefined>;

export function ConflictParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<ConflictResponse<Body, Headers, Message>, 'status'>>,
) : ConflictResponse<Body, Headers, Message>;

export function ConflictParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<ConflictResponse<Body, Headers, Message>, 'status'>> = {},
) : ConflictResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 409}) as ConflictResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Conflict {
    export const Parameters = ConflictParameters;
    export const Parameter = ConflictParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = ConflictResponse<
        Body,
        Headers,
        Message
    >;
}
export default Conflict;
