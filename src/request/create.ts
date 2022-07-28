import Request from './request';
import InferMethod from './method/string/infer';
import InferPath from './path/path/infer';
import InferHeader from '../headers/record/infer';
import InferBody from '../body/value/infer';
import Partial from '@alirya/object/partial';

export class CreateClass<
    Method extends string = string,
    Path extends string = string,
    Headers extends Record<string, string> = Record<string, string>,
    Body = unknown
    > implements Request<Method, Path, Headers, Body> {

    constructor(
        public method : Method,
        public path : Path,
        public headers : Headers,
        public body : Body
    ) {}
}


export function CreateParameters<
    Method extends string = string,
    Path extends string = string,
    Headers extends Record<string, string> = Record<string, string>,
    Body = unknown
> (
    method : Method,
    path : Path,
    body ?: Body,
    headers ?: Headers,
) : Request<Method, Path, Headers extends undefined ? {} : Headers, Body> {

    return CreateParameter({
        method,
        path,
        headers,
        body
    }) as Request as Request<Method, Path, Headers extends undefined ? {} : Headers, Body>;
}




export type RequestParameterReturn<RequestType extends Partial<Request, 'headers'|'body'>> = Request<
    InferMethod<RequestType>,
    InferPath<RequestType>,
    InferHeader<RequestType> extends never ? {} : InferHeader<RequestType>,
    InferBody<RequestType> extends never ? unknown : InferBody<RequestType>
>;

export function CreateParameter<
    RequestType extends Partial<Request, 'headers'|'body'>
>(
    request : RequestType,
) : RequestParameterReturn<RequestType> {


    if(!request.headers) {

        request.headers = {};
    }

    if(!request.body) {

        request.body = undefined;
    }

    return request as Request as RequestParameterReturn<RequestType>;

}


namespace RequestFunction {
    export const Parameters = CreateParameters;
    export const Parameter = CreateParameter;
    export const Class = CreateClass;
    export type ParameterReturn<RequestType extends Partial<Request, 'headers'|'body'>> = RequestParameterReturn<RequestType>;
}
export default RequestFunction;
