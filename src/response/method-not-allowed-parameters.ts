import Response from './response';
import MethodNotAllowedParameter from './method-noallowed-parameter';

export default function MethodNotAllowedParameters() : Response<405, string, {}, undefined>;

export default function MethodNotAllowedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    405,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function MethodNotAllowedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    405,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return MethodNotAllowedParameter({message, headers, body}) as Response as Response<
        405,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}

