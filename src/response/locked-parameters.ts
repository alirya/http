import Response from "./response";
import LockedParameter from "./locked-parameter";
//
// /**
//  * standard message
//  */
// export default function LockedParameters() : Response<423, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function LockedParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<423, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function LockedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     423,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function LockedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     423,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function LockedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    423,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return LockedParameter({message, headers, body}) as Response as Response<
        423,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
