import Response from "./response";
import TooManyRequestsParameter from "./too-many-requests-parameter";

export default function TooManyRequestsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    429,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return TooManyRequestsParameter({message, headers, body}) as Response as Response<
        429,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
