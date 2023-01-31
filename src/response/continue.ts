import Response from './response';
import {CreateParameter} from './create';

export function ContinueParameters() : ContinueResponse<undefined>;

export function ContinueParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ContinueResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function ContinueParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ContinueResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return ContinueParameter({message, headers, body}) as ContinueResponse as ContinueResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface ContinueResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 100, Message> {

}


export function ContinueParameter() : ContinueResponse<undefined>;

export function ContinueParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<ContinueResponse<Body, Headers, Message>, 'status'>>,
) : ContinueResponse<Body, Headers, Message>;

export function ContinueParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<ContinueResponse<Body, Headers, Message>, 'status'>> = {},
) : ContinueResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 100}) as ContinueResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Continue {
    export const Parameters = ContinueParameters;
    export const Parameter = ContinueParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = ContinueResponse<
        Body,
        Headers,
        Message
    >;
}
export default Continue;
