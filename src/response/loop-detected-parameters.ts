import Response from "./response";
import LoopDetectedParameter from "./loop-detected-parameter";
//
// /**
//  * standard message
//  */
// export default function LoopDetectedParameters() : Response<508, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function LoopDetectedParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<508, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function LoopDetectedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     508,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function LoopDetectedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     508,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function LoopDetectedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    508,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return LoopDetectedParameter({message, headers, body}) as Response as Response<
        508,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
