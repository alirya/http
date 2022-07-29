import Response from './response';
import {CreateParameter} from './create';

export function RangeNotSatisfiableParameters() : RangeNotSatisfiableResponse<undefined>;

export function RangeNotSatisfiableParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : RangeNotSatisfiableResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function RangeNotSatisfiableParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : RangeNotSatisfiableResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return RangeNotSatisfiableParameter({message, headers, body}) as RangeNotSatisfiableResponse as RangeNotSatisfiableResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface RangeNotSatisfiableResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 416, Message> {

}


export function RangeNotSatisfiableParameter() : RangeNotSatisfiableResponse<undefined>;

export function RangeNotSatisfiableParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<RangeNotSatisfiableResponse<Body, Headers, Message>, 'code'>>,
) : RangeNotSatisfiableResponse<Body, Headers, Message>;

export function RangeNotSatisfiableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<RangeNotSatisfiableResponse<Body, Headers, Message>, 'code'>> = {},
) : RangeNotSatisfiableResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 416}) as RangeNotSatisfiableResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace RangeNotSatisfiable {
    export const Parameters = RangeNotSatisfiableParameters;
    export const Parameter = RangeNotSatisfiableParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = RangeNotSatisfiableResponse<
        Body,
        Headers,
        Message
    >;
}
export default RangeNotSatisfiable;
