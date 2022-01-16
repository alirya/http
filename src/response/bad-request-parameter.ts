import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function BadRequestParameter() : Response<400, string, {}, undefined>;

export default function BadRequestParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<400, Message, Headers, Body>;

export default function BadRequestParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<400, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 400}) as Response<400, Message|string, Headers|{}, Body|undefined>;
}


