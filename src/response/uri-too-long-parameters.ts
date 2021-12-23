import Response from "./response";
import UriTooLongParameter from "./uri-too-long-parameter";
//
// /**
//  * standard message
//  */
// export default function UriTooLongParameters() : Response<414, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function UriTooLongParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<414, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function UriTooLongParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     414,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function UriTooLongParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     414,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function UriTooLongParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    414,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UriTooLongParameter({message, headers, body}) as Response as Response<
        414,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
