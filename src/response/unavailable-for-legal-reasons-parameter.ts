import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function UnavailableForLegalReasonsParameter() : Response<451, string, {}, undefined>;

export default function UnavailableForLegalReasonsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<451, Message, Headers, Body>;

export default function UnavailableForLegalReasonsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<451, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 451}) as Response<451, Message|string, Headers|{}, Body|undefined>;
}


