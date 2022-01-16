import Response from './response';
import PreconditionFailedParameter from './precondition-failed-parameter';

export default function PreconditionFailedParameters() : Response<412, string, {}, undefined>;

export default function PreconditionFailedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    412,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function PreconditionFailedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    412,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return PreconditionFailedParameter({message, headers, body}) as Response as Response<
        412,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}

