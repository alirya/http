import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function HttpVersionNotSupportedParameter() : Response<505, string, {}, undefined>;

export default function HttpVersionNotSupportedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<505, Message, Headers, Body>;

export default function HttpVersionNotSupportedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<505, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 505}) as Response<505, Message|string, Headers|{}, Body|undefined>;
}


