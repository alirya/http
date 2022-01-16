import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function ProxyAuthenticationRequiredParameter() : Response<407, string, {}, undefined>;

export default function ProxyAuthenticationRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<407, Message, Headers, Body>;

export default function ProxyAuthenticationRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<407, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 407}) as Response<407, Message|string, Headers|{}, Body|undefined>;
}


