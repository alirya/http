import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function PreconditionRequiredParameter() : Response<428, string, {}, undefined>;

export default function PreconditionRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<428, Message, Headers, Body>;

export default function PreconditionRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<428, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 428}) as Response<428, Message|string, Headers|{}, Body|undefined>;
}


