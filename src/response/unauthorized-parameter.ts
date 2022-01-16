import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function UnauthorizedParameter() : Response<401, string, {}, undefined>;

export default function UnauthorizedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<401, Message, Headers, Body>;

export default function UnauthorizedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<401, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 401}) as Response<401, Message|string, Headers|{}, Body|undefined>;
}


