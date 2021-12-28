import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function AcceptedParameter() : Response<202, string, {}, undefined>;

export default function AcceptedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<202, Message, Headers, Body>;

export default function AcceptedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<202, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 202}) as Response<202, Message|string, Headers|{}, Body|undefined>;
}


