import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function PayloadTooLargeParameter() : Response<413, string, {}, undefined>;

export default function PayloadTooLargeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<413, Message, Headers, Body>;

export default function PayloadTooLargeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<413, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 413}) as Response<413, Message|string, Headers|{}, Body|undefined>;
}


