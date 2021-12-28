import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function TemporaryRedirectParameter() : Response<307, string, {}, undefined>;

export default function TemporaryRedirectParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<307, Message, Headers, Body>;

export default function TemporaryRedirectParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<307, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 307}) as Response<307, Message|string, Headers|{}, Body|undefined>;
}


