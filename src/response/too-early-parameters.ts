import Response from "./response";
import TooEarlyParameter from "./too-early-parameter";
//
// /**
//  * standard message
//  */
// export default function TooEarlyParameters() : Response<425, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function TooEarlyParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<425, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function TooEarlyParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     425,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function TooEarlyParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     425,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function TooEarlyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    425,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return TooEarlyParameter({message, headers, body}) as Response as Response<
        425,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
