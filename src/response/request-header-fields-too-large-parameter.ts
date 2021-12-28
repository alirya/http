import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function RequestHeaderFieldsTooLargeParameter() : Response<431, string, {}, undefined>;

export default function RequestHeaderFieldsTooLargeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<431, Message, Headers, Body>;

export default function RequestHeaderFieldsTooLargeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<431, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 431}) as Response<431, Message|string, Headers|{}, Body|undefined>;
}


