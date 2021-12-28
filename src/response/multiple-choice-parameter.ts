import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function MultipleChoiceParameter() : Response<300, string, {}, undefined>;

export default function MultipleChoiceParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<300, Message, Headers, Body>;

export default function MultipleChoiceParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<300, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 300}) as Response<300, Message|string, Headers|{}, Body|undefined>;
}


