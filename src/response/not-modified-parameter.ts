import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function NotModifiedParameter() : Response<304, string, {}, undefined>;

export default function NotModifiedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<304, Message, Headers, Body>;

export default function NotModifiedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<304, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 304}) as Response<304, Message|string, Headers|{}, Body|undefined>;
}


