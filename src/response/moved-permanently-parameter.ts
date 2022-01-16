import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function MovedPermanentlyParameter() : Response<301, string, {}, undefined>;

export default function MovedPermanentlyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<301, Message, Headers, Body>;

export default function MovedPermanentlyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<301, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 301}) as Response<301, Message|string, Headers|{}, Body|undefined>;
}


