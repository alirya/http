import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function ConflictParameter() : Response<409, string, {}, undefined>;

export default function ConflictParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<409, Message, Headers, Body>;

export default function ConflictParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<409, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 409}) as Response<409, Message|string, Headers|{}, Body|undefined>;
}


