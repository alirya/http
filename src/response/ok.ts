import Response from './response';
import {CreateParameter} from './create';

export function OkParameters() : OkResponse<undefined>;

export function OkParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : OkResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function OkParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : OkResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return OkParameter({message, headers, body}) as OkResponse as OkResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface OkResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 200, Message> {

}


export function OkParameter() : OkResponse<undefined>;

export function OkParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<OkResponse<Body, Headers, Message>, 'status'>>,
) : OkResponse<Body, Headers, Message>;

export function OkParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<OkResponse<Body, Headers, Message>, 'status'>> = {},
) : OkResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 200}) as OkResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Ok {
    export const Parameters = OkParameters;
    export const Parameter = OkParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = OkResponse<
        Body,
        Headers,
        Message
    >;
}
export default Ok;
