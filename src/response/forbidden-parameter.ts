import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function ForbiddenParameter() : Response<403, string, {}, undefined>;

export default function ForbiddenParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<403, Message, Headers, Body>;

export default function ForbiddenParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<403, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 403}) as Response<403, Message|string, Headers|{}, Body|undefined>;
}


