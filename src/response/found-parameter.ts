import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function FoundParameter() : Response<302, string, {}, undefined>;

export default function FoundParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<302, Message, Headers, Body>;

export default function FoundParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<302, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 302}) as Response<302, Message|string, Headers|{}, Body|undefined>;
}


