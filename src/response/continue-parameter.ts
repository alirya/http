import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function ContinueParameter() : Response<100, string, {}, undefined>;

export default function ContinueParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<100, Message, Headers, Body>;

export default function ContinueParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<100, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 100}) as Response<100, Message|string, Headers|{}, Body|undefined>;
}


