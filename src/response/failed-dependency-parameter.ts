import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';

export default function FailedDependencyParameter() : Response<424, string, {}, undefined>;

export default function FailedDependencyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<424, Message, Headers, Body>;

export default function FailedDependencyParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<424, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({...response, code: 424}) as Response<424, Message|string, Headers|{}, Body|undefined>;
}


