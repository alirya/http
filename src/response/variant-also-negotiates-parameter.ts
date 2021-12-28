import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function VariantAlsoNegotiatesParameter() : Response<506, string, {}, undefined>;

export default function VariantAlsoNegotiatesParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<506, Message, Headers, Body>;

export default function VariantAlsoNegotiatesParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<506, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 506}) as Response<506, Message|string, Headers|{}, Body|undefined>;
}


