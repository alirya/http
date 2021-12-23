import Response from "./response";
import UnusedParameter from "./unused-parameter";
//
// /**
//  * standard message
//  */
// export default function UnusedParameters() : Response<306, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function UnusedParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<306, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function UnusedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     306,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function UnusedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     306,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function UnusedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    306,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnusedParameter({message, headers, body}) as Response as Response<
        306,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
