import RequestMethod from "./method/string/enum/method";
import Request from "./request";
import InferMethod from "./method/string/infer";
import InferPath from "./path/path/infer";
import InferHeader from "../headers/record/infer";
import InferBody from "../body/value/infer";
import Partial from "@dikac/t-object/partial";
//
// export default class RequestClassParameters<
//     RequestType extends Request
// > implements Request<
//     InferMethod<RequestType>,
//     InferPath<RequestType>,
//     InferHeader<RequestType>,
//     InferBody<RequestType>
// > {
//
//     constructor(
//         public method : Method,
//         public path : Path,
//         public headers : Headers,
//         public body : Body
//     ) {}
// }
//

export type Type<RequestType extends Partial<Request, 'headers'|'body'>> = Request<
    InferMethod<RequestType>,
    InferPath<RequestType>,
    InferHeader<RequestType> extends never ? {} : InferHeader<RequestType>,
    InferBody<RequestType> extends never ? unknown : InferBody<RequestType>
>

export default function RequestFunctionParameter<
    RequestType extends Partial<Request, 'headers'|'body'>
>(
    request : RequestType,
) : Type<RequestType> {


    if(!request.headers) {

        request.headers = {};
    }

    if(!request.body) {

        request.body = undefined;
    }

    return request as Request as Type<RequestType>;

}
