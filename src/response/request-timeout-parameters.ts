import Response from "./response";
import RequestTimeoutParameter from "./request-timeout-parameter";
//
// /**
//  * standard message
//  */
// export default function RequestTimeoutParameters() : Response<408, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function RequestTimeoutParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<408, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function RequestTimeoutParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     408,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function RequestTimeoutParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     408,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function RequestTimeoutParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    408,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return RequestTimeoutParameter({message, headers, body}) as Response as Response<
        408,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
