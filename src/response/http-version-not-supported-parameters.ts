import Response from "./response";
import HttpVersionNotSupportedParameter from "./http-version-not-supported-parameter";

export default function HttpVersionNotSupportedParameters() : Response<505, string, {}, undefined>;

export default function HttpVersionNotSupportedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    505,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function HttpVersionNotSupportedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    505,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return HttpVersionNotSupportedParameter({message, headers, body}) as Response as Response<
        505,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}

