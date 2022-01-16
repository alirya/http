import Response from './response';
import NetworkAuthenticationRequiredParameter from './network-authentication-required-parameter';

export default function NetworkAuthenticationRequiredParameters() : Response<511, string, {}, undefined>;

export default function NetworkAuthenticationRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    511,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function NetworkAuthenticationRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    511,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NetworkAuthenticationRequiredParameter({message, headers, body}) as Response as Response<
        511,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}

