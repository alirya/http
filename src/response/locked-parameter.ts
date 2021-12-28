import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function LockedParameter() : Response<423, string, {}, undefined>;

export default function LockedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<423, Message, Headers, Body>;

export default function LockedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<423, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 423}) as Response<423, Message|string, Headers|{}, Body|undefined>;
}


