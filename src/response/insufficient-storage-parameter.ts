import Response from "./response";
import ResponseFunctionParameter from "./response-function-parameter";

export default function InsufficientStorageParameter() : Response<507, string, {}, undefined>;

export default function InsufficientStorageParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<507, Message, Headers, Body>;

export default function InsufficientStorageParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<507, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 507}) as Response<507, Message|string, Headers|{}, Body|undefined>;
}


