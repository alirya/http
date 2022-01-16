import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function TooEarlyParameter() : Response<425, string, {}, undefined>;

export default function TooEarlyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<425, Message, Headers, Body>;

export default function TooEarlyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<425, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 425}) as Response<425, Message|string, Headers|{}, Body|undefined>;
}


