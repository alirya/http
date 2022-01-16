import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function RangeNotSatisfiableParameter() : Response<416, string, {}, undefined>;

export default function RangeNotSatisfiableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<416, Message, Headers, Body>;

export default function RangeNotSatisfiableParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<416, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 416}) as Response<416, Message|string, Headers|{}, Body|undefined>;
}


