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
    Body,
    Headers extends {},
    Code extends number,
    Message extends string,
    > implements Response<Body, Headers, Code, Message> {

    constructor(
        public body : Body,
        public headers : Headers,
        public code : Code,
        public message : Message,
    ) {}
}



// export function CreateParameters<
//     Code extends StrictNumber,
//     Headers extends Record<string, string>,
//     Body
// >(
//     code : Code,
// ) : Response<Code, string, {}, undefined>;


export function CreateParameters<
    Body
>(
    body : Body,
) : Response<Body, {}, 200>;

export function CreateParameters<
    Body,
    Headers extends {},
>(
    body : Body,
    headers : Headers,
) : Response<Body, Headers, 200>;


// export function CreateParameters<
//     Code extends number,
//     Message extends string,
//     Headers extends Record<string, string>,
//     Body
// >(
//     code : Code,
//     message : Message,
//     headers : Headers,
// ) : Response<Code, Message, Headers, undefined>;

export function CreateParameters<
    Code extends StrictNumber,
    Headers extends {},
    Body
>(
    body : Body,
    headers : Headers,
    code : Code,
) : Response<Body, Headers, Code>;


export function CreateParameters<
    Code extends number,
    Message extends string,
    Headers extends {},
    Body
>(
    body : Body,
    headers : Headers,
    code : Code,
    message : Message,
) : Response<Body, Headers, Code, Message>;

// export function CreateParameters<
//     Code extends StrictNumber,
//     Headers extends Record<string, string>,
//     Body
// >(
//     code : Code,
//     message : null,
//     headers : Headers,
//     body : Body
// ) : Response<Code, string, Headers, Body>;





export function CreateParameters<
    Body,
    Headers extends {},
    Code extends StrictNumber,
    Message extends string,
>(
    body ?: Body,
    headers : Headers|Record<string, string> = {},
    code : Code|number = 200,
    message ?: Message,
) : Response<Body|undefined, Headers|Record<string, string>, Code, Message|string> {

    return CreateParameter({
        code,
        message,
        headers,
        body
    }) as Response<Body|undefined, Headers|Record<string, string>, Code, Message|string>;
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
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferCode<ResponseType>,
    string
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
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferCode<ResponseType>,
    InferMessage<ResponseType>
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
