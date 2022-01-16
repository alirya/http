import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function PermanentRedirectParameter() : Response<308, string, {}, undefined>;

export default function PermanentRedirectParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<308, Message, Headers, Body>;

export default function PermanentRedirectParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<308, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 308}) as Response<308, Message|string, Headers|{}, Body|undefined>;
}


