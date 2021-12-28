import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function InternalServerErrorParameter() : Response<500, string, {}, undefined>;

export default function InternalServerErrorParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<500, Message, Headers, Body>;

export default function InternalServerErrorParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<500, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 500}) as Response<500, Message|string, Headers|{}, Body|undefined>;
}


