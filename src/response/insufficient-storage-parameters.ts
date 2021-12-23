import Response from "./response";
import InsufficientStorageParameter from "./insufficient-storage-parameter";
//
// /**
//  * standard message
//  */
// export default function InsufficientStorageParameters() : Response<507, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function InsufficientStorageParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<507, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function InsufficientStorageParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     507,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function InsufficientStorageParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     507,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function InsufficientStorageParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    507,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return InsufficientStorageParameter({message, headers, body}) as Response as Response<
        507,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
