import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function NetworkAuthenticationRequiredParameter() : Response<511, string, {}, undefined>;

export default function NetworkAuthenticationRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<511, Message, Headers, Body>;

export default function NetworkAuthenticationRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<511, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 511}) as Response<511, Message|string, Headers|{}, Body|undefined>;
}


