import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function TooManyRequestsParameter() : Response<429, string, {}, undefined>;

export default function TooManyRequestsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<429, Message, Headers, Body>;

export default function TooManyRequestsParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<429, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 429}) as Response<429, Message|string, Headers|{}, Body|undefined>;
}


