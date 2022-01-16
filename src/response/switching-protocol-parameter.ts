import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function SwitchingProtocolParameter() : Response<101, string, {}, undefined>;

export default function SwitchingProtocolParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<101, Message, Headers, Body>;

export default function SwitchingProtocolParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<101, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 101}) as Response<101, Message|string, Headers|{}, Body|undefined>;
}


