import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function NotExtendedParameter() : Response<510, string, {}, undefined>;

export default function NotExtendedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<510, Message, Headers, Body>;

export default function NotExtendedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<510, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 510}) as Response<510, Message|string, Headers|{}, Body|undefined>;
}


