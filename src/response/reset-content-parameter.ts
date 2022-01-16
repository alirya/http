import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function ResetContentParameter() : Response<205, string, {}, undefined>;

export default function ResetContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<205, Message, Headers, Body>;

export default function ResetContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<205, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 205}) as Response<205, Message|string, Headers|{}, Body|undefined>;
}


