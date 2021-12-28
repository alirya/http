import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function UpgradeRequiredParameter() : Response<426, string, {}, undefined>;

export default function UpgradeRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<426, Message, Headers, Body>;

export default function UpgradeRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<426, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 426}) as Response<426, Message|string, Headers|{}, Body|undefined>;
}


