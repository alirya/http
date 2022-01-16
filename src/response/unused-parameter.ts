import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function UnusedParameter() : Response<306, string, {}, undefined>;

export default function UnusedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<306, Message, Headers, Body>;

export default function UnusedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<306, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 306}) as Response<306, Message|string, Headers|{}, Body|undefined>;
}


