import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function RequestTimeoutParameter() : Response<408, string, {}, undefined>;

export default function RequestTimeoutParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<408, Message, Headers, Body>;

export default function RequestTimeoutParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<408, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 408}) as Response<408, Message|string, Headers|{}, Body|undefined>;
}


