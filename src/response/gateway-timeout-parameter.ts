import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function GatewayTimeoutParameter() : Response<504, string, {}, undefined>;

export default function GatewayTimeoutParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<504, Message, Headers, Body>;

export default function GatewayTimeoutParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<504, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 504}) as Response<504, Message|string, Headers|{}, Body|undefined>;
}


