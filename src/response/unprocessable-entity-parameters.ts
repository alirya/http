import Response from "./response";
import UnprocessableEntityParameter from "./unprocessable-entity-parameter";

export default function UnprocessableEntityParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    422,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnprocessableEntityParameter({message, headers, body}) as Response as Response<
        422,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
