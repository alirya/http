import Response from "./response";
import RequestHeaderFieldsTooLargeParameter from "./request-header-fields-too-large-parameter";
//
// /**
//  * standard message
//  */
// export default function RequestHeaderFieldsTooLargeParameters() : Response<431, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function RequestHeaderFieldsTooLargeParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<431, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function RequestHeaderFieldsTooLargeParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     431,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function RequestHeaderFieldsTooLargeParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     431,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function RequestHeaderFieldsTooLargeParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    431,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return RequestHeaderFieldsTooLargeParameter({message, headers, body}) as Response as Response<
        431,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
