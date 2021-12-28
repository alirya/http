import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function UnsupportedMediaTypeParameter() : Response<415, string, {}, undefined>;

export default function UnsupportedMediaTypeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<415, Message, Headers, Body>;

export default function UnsupportedMediaTypeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<415, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 415}) as Response<415, Message|string, Headers|{}, Body|undefined>;
}


