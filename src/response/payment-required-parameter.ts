import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function PaymentRequiredParameter() : Response<402, string, {}, undefined>;

export default function PaymentRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<402, Message, Headers, Body>;

export default function PaymentRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<402, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 402}) as Response<402, Message|string, Headers|{}, Body|undefined>;
}


