import Response from './response';
import StrictNumber from './code/number/strict';
import ResponseFunctionParameter from './response-function-parameter';


export default function ResponseFunctionParameters<
    Code extends StrictNumber,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
) : Response<Code, string, {}, undefined>;


export default function ResponseFunctionParameters<
    Code extends number,
    Message extends string,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : Message,
) : Response<Code, Message, {}, undefined>;

export default function ResponseFunctionParameters<
    Code extends StrictNumber,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : null,
) : Response<Code, string, {}, undefined>;


export default function ResponseFunctionParameters<
    Code extends number,
    Message extends string,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : Message,
    headers : Headers,
) : Response<Code, Message, Headers, undefined>;

export default function ResponseFunctionParameters<
    Code extends StrictNumber,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : null,
    headers : Headers,
) : Response<Code, string, Headers, undefined>;







export default function ResponseFunctionParameters<
    Code extends number,
    Message extends string,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : Message,
    headers : Headers,
    body : Body
) : Response<Code, Message, Headers, Body>;

export default function ResponseFunctionParameters<
    Code extends StrictNumber,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message : null,
    headers : Headers,
    body : Body
) : Response<Code, string, Headers, Body>;





export default function ResponseFunctionParameters<
    Code extends StrictNumber,
    Message extends string,
    Headers extends Record<string, string>,
    Body
>(
    code : Code,
    message ?: Message|null,
    headers : Headers|{} = {},
    body : Body|undefined = undefined
) : Response<Code, Message|string, Headers|{}, Body|undefined> {

    return ResponseFunctionParameter({
        code,
        message : message || undefined,
        headers,
        body
    });
}

