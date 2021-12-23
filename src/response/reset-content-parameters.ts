import Response from "./response";
import ResetContentParameter from "./reset-content-parameter";
//
// /**
//  * standard message
//  */
// export default function ResetContentParameters() : Response<205, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function ResetContentParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<205, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function ResetContentParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     205,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function ResetContentParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     205,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function ResetContentParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    205,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ResetContentParameter({message, headers, body}) as Response as Response<
        205,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
