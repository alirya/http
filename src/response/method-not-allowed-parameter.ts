import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function MethodNotAllowedParameter() : Response<405, string, {}, undefined>;

export default function MethodNotAllowedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<405, Message, Headers, Body>;

export default function MethodNotAllowedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<405, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 405}) as Response<405, Message|string, Headers|{}, Body|undefined>;
}


