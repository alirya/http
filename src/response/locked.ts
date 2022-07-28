import Response from './response';
import {CreateParameter} from './create';

export function LockedParameters() : Response<423, string, {}, undefined>;

export function LockedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    423,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function LockedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    423,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return LockedParameter({message, headers, body}) as Response as Response<
        423,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function LockedParameter() : Response<423, string, {}, undefined>;

export function LockedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<423, Message, Headers, Body>;

export function LockedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<423, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 423}) as Response<423, Message|string, Headers|{}, Body|undefined>;
}




namespace Locked {
    export const Parameters = LockedParameters;
    export const Parameter = LockedParameter;
}
export default Locked;
