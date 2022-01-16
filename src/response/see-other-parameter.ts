import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function SeeOtherParameter() : Response<303, string, {}, undefined>;

export default function SeeOtherParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<303, Message, Headers, Body>;

export default function SeeOtherParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<303, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 303}) as Response<303, Message|string, Headers|{}, Body|undefined>;
}


