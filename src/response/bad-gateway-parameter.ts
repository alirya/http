import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function BadGatewayParameter() : Response<502, string, {}, undefined>;

export default function BadGatewayParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<502, Message, Headers, Body>;

export default function BadGatewayParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<502, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 502}) as Response<502, Message|string, Headers|{}, Body|undefined>;
}


