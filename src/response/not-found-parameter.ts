import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function NotFoundParameter() : Response<404, string, {}, undefined>;

export default function NotFoundParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<404, Message, Headers, Body>;

export default function NotFoundParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<404, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 404}) as Response<404, Message|string, Headers|{}, Body|undefined>;
}


