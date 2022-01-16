import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function PartialContentParameter() : Response<206, string, {}, undefined>;

export default function PartialContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<206, Message, Headers, Body>;

export default function PartialContentParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<206, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 206}) as Response<206, Message|string, Headers|{}, Body|undefined>;
}


