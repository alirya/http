import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function UseProxyParameter() : Response<305, string, {}, undefined>;

export default function UseProxyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<305, Message, Headers, Body>;

export default function UseProxyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<305, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 305}) as Response<305, Message|string, Headers|{}, Body|undefined>;
}


