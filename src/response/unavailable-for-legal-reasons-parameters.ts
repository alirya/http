import Response from "./response";
import UnavailableForLegalReasonsParameter from "./unavailable-for-legal-reasons-parameter";

export default function UnavailableForLegalReasonsParameters() : Response<451, string, {}, undefined>;

export default function UnavailableForLegalReasonsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    451,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function UnavailableForLegalReasonsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    451,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnavailableForLegalReasonsParameter({message, headers, body}) as Response as Response<
        451,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}

