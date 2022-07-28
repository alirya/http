import Response from './response';
import {CreateParameter} from './create';

export function NoContentParameters() : Response<204, string, {}, undefined>;

export function NoContentParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    204,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function NoContentParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : Response<
    204,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NoContentParameter({message, headers, body}) as Response as Response<
        204,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function NoContentParameter() : Response<204, string, {}, undefined>;

export function NoContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<204, Message, Headers, Body>;

export function NoContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<204, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 204}) as Response<204, Message|string, Headers|{}, Body|undefined>;
}




namespace NoContent {
    export const Parameters = NoContentParameters;
    export const Parameter = NoContentParameter;
}
export default NoContent;
