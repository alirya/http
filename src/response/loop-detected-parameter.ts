import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function LoopDetectedParameter() : Response<508, string, {}, undefined>;

export default function LoopDetectedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<508, Message, Headers, Body>;

export default function LoopDetectedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<508, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 508}) as Response<508, Message|string, Headers|{}, Body|undefined>;
}


