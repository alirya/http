import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function GoneParameter() : Response<410, string, {}, undefined>;

export default function GoneParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<410, Message, Headers, Body>;

export default function GoneParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<410, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 410}) as Response<410, Message|string, Headers|{}, Body|undefined>;
}


