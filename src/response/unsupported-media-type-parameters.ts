import Response from "./response";
import UnsupportedMediaTypeParameter from "./unsupported-media-type-parameter";

export default function UnsupportedMediaTypeParameters() : Response<415, string, {}, undefined>;

export default function UnsupportedMediaTypeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    415,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function UnsupportedMediaTypeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    415,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnsupportedMediaTypeParameter({message, headers, body}) as Response as Response<
        415,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
