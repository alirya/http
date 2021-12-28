import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function PreconditionFailedParameter() : Response<412, string, {}, undefined>;

export default function PreconditionFailedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<412, Message, Headers, Body>;

export default function PreconditionFailedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<412, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 412}) as Response<412, Message|string, Headers|{}, Body|undefined>;
}


