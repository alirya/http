import Response from './response';
import StrictNumber from './code/number/strict';
import MessageCode from './message/string/strict';
import InferHeader from '../headers/record/infer';
import InferBody from '../body/value/infer';
import {Object} from 'ts-toolbelt';
import StrictOmit from '@alirya/object/strict-omit';
import InferMessage from '@alirya/message/message/infer';
import InferCode from '@alirya/code/code/infer';
import {Optional} from 'utility-types';

export class CreateClass<
    Code extends number,
    Message extends string,
    Headers extends Record<string, string>,
    Body
    > implements Response<Code, Message, Headers, Body> {

    constructor(
        public code : Code,
        public message : Message,
        public headers : Headers,
        public body : Body
    ) {}
}



export function CreateParameters<
    Code extends StrictNumber,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
) : Response<Code, string, {}, undefined>;


export function CreateParameters<
    Code extends number,
    Message extends string,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : Message,
) : Response<Code, Message, {}, undefined>;

export function CreateParameters<
    Code extends StrictNumber,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : null,
) : Response<Code, string, {}, undefined>;


export function CreateParameters<
    Code extends number,
    Message extends string,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : Message,
    headers : Headers,
) : Response<Code, Message, Headers, undefined>;

export function CreateParameters<
    Code extends StrictNumber,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : null,
    headers : Headers,
) : Response<Code, string, Headers, undefined>;







export function CreateParameters<
    Code extends number,
    Message extends string,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : Message,
    headers : Headers,
    body : Body
) : Response<Code, Message, Headers, Body>;

export function CreateParameters<
    Code extends StrictNumber,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : null,
    headers : Headers,
    body : Body
) : Response<Code, string, Headers, Body>;





export function CreateParameters<
    Code extends StrictNumber,
    Message extends string,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message ?: Message|null,
    headers : Headers|{} = {},
    body : Body|undefined = undefined
) : Response<Code, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({
        code,
        message : message || undefined,
        headers,
        body
    });
}





/**
 * strict code auto generated message
 *
 * @param response
 */
export function CreateParameter<
    ResponseType extends Pick<Response<StrictNumber>, 'code'> & Optional<StrictOmit<Response, 'code'>, 'headers'|'body'|'message'>,
>(
    response : ResponseType,
) : Response<
    InferCode<ResponseType>,
    string,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>
>;

/**
 * custom code with custom message
 *
 * @param response
 */
export function CreateParameter<
    ResponseType extends Pick<Response, 'code'> & Optional<StrictOmit<Response, 'code'>, 'headers'|'body'>,
>(
    response : Response
) :  Response<
    InferCode<ResponseType>,
    InferMessage<ResponseType>,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>
>;

export function CreateParameter<
    ResponseType extends Response,
>(
    response : Response|Object.Optional<Response, 'message'>,

) : Response {

    if(!response.message) {

        response.message = MessageCode(response.code as StrictNumber);
    }

    if(!response.headers) {

        response.headers = {};
    }

    return response as Response;
}




namespace Create {
    export const Parameters = CreateParameters;
    export const Parameter = CreateParameter;
}
export default Create;
