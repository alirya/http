import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function NotAcceptableParameter() : Response<406, string, {}, undefined>;

export default function NotAcceptableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<406, Message, Headers, Body>;

export default function NotAcceptableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<406, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 406}) as Response<406, Message|string, Headers|{}, Body|undefined>;
}


