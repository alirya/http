import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function MisdirectedRequestParameter() : Response<421, string, {}, undefined>;

export default function MisdirectedRequestParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<421, Message, Headers, Body>;

export default function MisdirectedRequestParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<421, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 421}) as Response<421, Message|string, Headers|{}, Body|undefined>;
}


