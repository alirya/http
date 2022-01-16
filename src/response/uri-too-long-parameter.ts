import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function UriTooLongParameter() : Response<414, string, {}, undefined>;

export default function UriTooLongParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<414, Message, Headers, Body>;

export default function UriTooLongParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<414, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 414}) as Response<414, Message|string, Headers|{}, Body|undefined>;
}


