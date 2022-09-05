import Response from './response';
import StrictNumber from './status/number/strict';
import MessageCode from './message/string/strict';
import InferHeader from '../headers/record/infer';
import InferBody from '../body/value/infer';
import {Object} from 'ts-toolbelt';
import StrictOmit from '@alirya/object/strict-omit';
import InferMessage from '@alirya/message/message/infer';
import InferCode from './status/number/infer';
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
        public status : Code,
        public message : Message,
    ) {}
}



// export function CreateParameters<
//     Code extends StrictNumber,
//     Headers extends Record<string, string>,
//     Body
// >(
//     status : Code,
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
//     status : Code,
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
    status : Code,
) : Response<Body, Headers, Code>;


export function CreateParameters<
    Code extends number,
    Message extends string,
    Headers extends {},
    Body
>(
    body : Body,
    headers : Headers,
    status : Code,
    message : Message,
) : Response<Body, Headers, Code, Message>;

// export function CreateParameters<
//     Code extends StrictNumber,
//     Headers extends Record<string, string>,
//     Body
// >(
//     status : Code,
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
    status : Code|number = 200,
    message ?: Message,
) : Response<Body|undefined, Headers|Record<string, string>, Code, Message|string> {

    return CreateParameter({
        status,
        message,
        headers,
        body
    }) as Response<Body|undefined, Headers|Record<string, string>, Code, Message|string>;
}





/**
 * strict status auto generated message
 *
 * @param response
 */
export function CreateParameter<
    ResponseType extends Pick<Response<StrictNumber>, 'status'> & Optional<StrictOmit<Response, 'status'>, 'headers'|'body'|'message'>,
>(
    response : ResponseType,
) : Response<
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferCode<ResponseType>,
    string
>;

/**
 * custom status with custom message
 *
 * @param response
 */
export function CreateParameter<
    ResponseType extends Pick<Response, 'status'> & Optional<StrictOmit<Response, 'status'>, 'headers'|'body'>,
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

        response.message = MessageCode(response.status as StrictNumber);
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
