import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function OkParameter() : Response<200, string, {}, undefined>;

export default function OkParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<200, Message, Headers, Body>;

export default function OkParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<200, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 200}) as Response<200, Message|string, Headers|{}, Body|undefined>;
}


