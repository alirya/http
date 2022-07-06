import Response from './response.js';
import {CreateParameter} from './create.js';

export function FailedDependencyParameters() : Response<424, string, {}, undefined>;

export function FailedDependencyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    424,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function FailedDependencyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    424,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return FailedDependencyParameter({message, headers, body}) as Response as Response<
        424,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function FailedDependencyParameter() : Response<424, string, {}, undefined>;

export function FailedDependencyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<424, Message, Headers, Body>;

export function FailedDependencyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<424, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 424}) as Response<424, Message|string, Headers|{}, Body|undefined>;
}




namespace FailedDependency {
    export const Parameters = FailedDependencyParameters;
    export const Parameter = FailedDependencyParameter;
}
export default FailedDependency;
