import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function LengthRequiredParameter() : Response<411, string, {}, undefined>;

export default function LengthRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<411, Message, Headers, Body>;

export default function LengthRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<411, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 411}) as Response<411, Message|string, Headers|{}, Body|undefined>;
}


