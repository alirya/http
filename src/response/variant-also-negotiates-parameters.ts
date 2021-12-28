import Response from "./response";
import VariantAlsoNegotiatesParameter from "./variant-also-negotiates-parameter";

export default function VariantAlsoNegotiatesParameters() : Response<506, string, {}, undefined>;

export default function VariantAlsoNegotiatesParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    506,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function VariantAlsoNegotiatesParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    506,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return VariantAlsoNegotiatesParameter({message, headers, body}) as Response as Response<
        506,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}

