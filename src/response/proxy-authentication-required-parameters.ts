import Response from "./response";
import ProxyAuthenticationRequiredParameter from "./proxy-authentication-required-parameter";

export default function ProxyAuthenticationRequiredParameters() : Response<407, string, {}, undefined>;

export default function ProxyAuthenticationRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    407,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function ProxyAuthenticationRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    407,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ProxyAuthenticationRequiredParameter({message, headers, body}) as Response as Response<
        407,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}

