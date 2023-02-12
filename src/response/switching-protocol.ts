import Response from './response.js';
import {CreateParameter} from './create.js';

export function SwitchingProtocolParameters() : SwitchingProtocolResponse<undefined>;

export function SwitchingProtocolParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : SwitchingProtocolResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function SwitchingProtocolParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : SwitchingProtocolResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return SwitchingProtocolParameter({message, headers, body}) as SwitchingProtocolResponse as SwitchingProtocolResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type SwitchingProtocolResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 101, Message>


export function SwitchingProtocolParameter() : SwitchingProtocolResponse<undefined>;

export function SwitchingProtocolParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<SwitchingProtocolResponse<Body, Headers, Message>, 'status'>>,
) : SwitchingProtocolResponse<Body, Headers, Message>;

export function SwitchingProtocolParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<SwitchingProtocolResponse<Body, Headers, Message>, 'status'>> = {},
) : SwitchingProtocolResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 101}) as SwitchingProtocolResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace SwitchingProtocol {
    export const Parameters = SwitchingProtocolParameters;
    export const Parameter = SwitchingProtocolParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = SwitchingProtocolResponse<
        Body,
        Headers,
        Message
    >;
}
export default SwitchingProtocol;
