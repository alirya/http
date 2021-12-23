import Response from "./response";
import ConflictParameter from "./conflict-parameter";
//
// /**
//  * standard message
//  */
// export default function ConflictParameters() : Response<409, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function ConflictParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<409, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function ConflictParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     409,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function ConflictParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     409,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function ConflictParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    409,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ConflictParameter({message, headers, body}) as Response as Response<
        409,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
