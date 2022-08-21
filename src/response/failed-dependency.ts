import Response from './response';
import {CreateParameter} from './create';

export function FailedDependencyParameters() : FailedDependencyResponse<undefined>;

export function FailedDependencyParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : FailedDependencyResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function FailedDependencyParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : FailedDependencyResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return FailedDependencyParameter({message, headers, body}) as FailedDependencyResponse as FailedDependencyResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface FailedDependencyResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 424, Message> {

}


export function FailedDependencyParameter() : FailedDependencyResponse<undefined>;

export function FailedDependencyParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<FailedDependencyResponse<Body, Headers, Message>, 'code'>>,
) : FailedDependencyResponse<Body, Headers, Message>;

export function FailedDependencyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<FailedDependencyResponse<Body, Headers, Message>, 'code'>> = {},
) : FailedDependencyResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 424}) as FailedDependencyResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace FailedDependency {
    export const Parameters = FailedDependencyParameters;
    export const Parameter = FailedDependencyParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = FailedDependencyResponse<
        Body,
        Headers,
        Message
    >;
}
export default FailedDependency;
