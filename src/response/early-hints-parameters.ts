import Response from "./response";
import EarlyHintsParameter from "./early-hints-parameter";
//
// /**
//  * standard message
//  */
// export default function EarlyHintsParameters() : Response<103, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function EarlyHintsParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<103, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function EarlyHintsParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     103,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function EarlyHintsParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     103,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function EarlyHintsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    103,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return EarlyHintsParameter({message, headers, body}) as Response as Response<
        103,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
