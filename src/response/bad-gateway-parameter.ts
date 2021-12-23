import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";
import {Optional} from "utility-types";
import StrictOmit from "@dikac/t-object/strict-omit";
import InferMessage from "@dikac/t-message/message/infer";
import InferHeader from "../headers/record/infer";
import InferBody from "../body/value/infer";

export default function BadGatewayParameter() : Response<502, string, {}, undefined>;

export default function BadGatewayParameter<
    ResponseType extends Optional<StrictOmit<Response, 'code'>, 'headers'|'body'|'message'>,
>(
    response : ResponseType,
) : Response<
    502,
    string,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>
>;

export default function BadGatewayParameter<
    ResponseType extends Optional<StrictOmit<Response, 'code'>, 'headers'|'body'>,
>(
    response : ResponseType,
) : Response<
    502,
    InferMessage<ResponseType>,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>
>;

export default function BadGatewayParameter<
    ResponseType extends Optional<StrictOmit<Response, 'code'>, 'headers'|'body'>,
>(
    response : ResponseType|{} = {},
) : Response<502> {

    return ResponseFunctionParameter({...response, code: 502});
}
