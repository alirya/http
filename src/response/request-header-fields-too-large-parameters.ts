import Response from "./response";
import RequestHeaderFieldsTooLargeParameter from "./requesheader-fields-too-large-parameter";

export default function RequestHeaderFieldsTooLargeParameters() : Response<431, string, {}, undefined>;

export default function RequestHeaderFieldsTooLargeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    431,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function RequestHeaderFieldsTooLargeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    431,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return RequestHeaderFieldsTooLargeParameter({message, headers, body}) as Response as Response<
        431,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}

