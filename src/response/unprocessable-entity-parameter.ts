import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function UnprocessableEntityParameter() : Response<422, string, {}, undefined>;

export default function UnprocessableEntityParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<422, Message, Headers, Body>;

export default function UnprocessableEntityParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<422, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 422}) as Response<422, Message|string, Headers|{}, Body|undefined>;
}


