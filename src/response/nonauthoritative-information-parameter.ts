import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function NonauthoritativeInformationParameter() : Response<203, string, {}, undefined>;

export default function NonauthoritativeInformationParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<203, Message, Headers, Body>;

export default function NonauthoritativeInformationParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<203, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 203}) as Response<203, Message|string, Headers|{}, Body|undefined>;
}


