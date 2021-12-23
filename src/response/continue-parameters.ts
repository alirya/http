import Response from "./response";
import ContinueParameter from "./continue-parameter";
//
// /**
//  * standard message
//  */
// export default function ContinueParameters() : Response<100, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function ContinueParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<100, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function ContinueParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     100,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function ContinueParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     100,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function ContinueParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    100,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ContinueParameter({message, headers, body}) as Response as Response<
        100,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
