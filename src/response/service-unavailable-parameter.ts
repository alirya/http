import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function ServiceUnavailableParameter() : Response<503, string, {}, undefined>;

export default function ServiceUnavailableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<503, Message, Headers, Body>;

export default function ServiceUnavailableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<503, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 503}) as Response<503, Message|string, Headers|{}, Body|undefined>;
}


