import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function CreatedParameter() : Response<201, string, {}, undefined>;

export default function CreatedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<201, Message, Headers, Body>;

export default function CreatedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<201, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 201}) as Response<201, Message|string, Headers|{}, Body|undefined>;
}


