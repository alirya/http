import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function NotImplementedParameter() : Response<501, string, {}, undefined>;

export default function NotImplementedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<501, Message, Headers, Body>;

export default function NotImplementedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<501, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 501}) as Response<501, Message|string, Headers|{}, Body|undefined>;
}


