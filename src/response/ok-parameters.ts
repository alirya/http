import Response from "./response";
import OkParameter from "./ok-parameter";
//
// /**
//  * standard message
//  */
// export default function OkParameters() : Response<200, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function OkParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<200, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function OkParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     200,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function OkParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     200,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function OkParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    200,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return OkParameter({message, headers, body}) as Response as Response<
        200,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
