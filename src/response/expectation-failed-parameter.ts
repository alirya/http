import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function ExpectationFailedParameter() : Response<417, string, {}, undefined>;

export default function ExpectationFailedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<417, Message, Headers, Body>;

export default function ExpectationFailedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<417, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 417}) as Response<417, Message|string, Headers|{}, Body|undefined>;
}


