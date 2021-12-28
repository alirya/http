import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function EarlyHintsParameter() : Response<103, string, {}, undefined>;

export default function EarlyHintsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<103, Message, Headers, Body>;

export default function EarlyHintsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<103, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 103}) as Response<103, Message|string, Headers|{}, Body|undefined>;
}


