import Response from './response';
import ServiceUnavailableParameter from './service-unavailable-parameter';

export default function ServiceUnavailableParameters() : Response<503, string, {}, undefined>;

export default function ServiceUnavailableParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    503,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function ServiceUnavailableParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    503,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ServiceUnavailableParameter({message, headers, body}) as Response as Response<
        503,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}

