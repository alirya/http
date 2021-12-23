import Response from "./response";
import UnsupportedMediaTypeParameter from "./unsupported-media-type-parameter";
//
// /**
//  * standard message
//  */
// export default function UnsupportedMediaTypeParameters() : Response<415, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function UnsupportedMediaTypeParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<415, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function UnsupportedMediaTypeParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     415,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function UnsupportedMediaTypeParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     415,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function UnsupportedMediaTypeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
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
