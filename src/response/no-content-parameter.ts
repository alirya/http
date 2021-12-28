import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function NoContentParameter() : Response<204, string, {}, undefined>;

export default function NoContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<204, Message, Headers, Body>;

export default function NoContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<204, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 204}) as Response<204, Message|string, Headers|{}, Body|undefined>;
}


