import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function ImATeapotParameter() : Response<418, string, {}, undefined>;

export default function ImATeapotParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<418, Message, Headers, Body>;

export default function ImATeapotParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<418, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 418}) as Response<418, Message|string, Headers|{}, Body|undefined>;
}


