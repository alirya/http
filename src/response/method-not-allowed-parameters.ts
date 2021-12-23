import Response from "./response";
import MethodNotAllowedParameter from "./method-not-allowed-parameter";
//
// /**
//  * standard message
//  */
// export default function MethodNotAllowedParameters() : Response<405, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function MethodNotAllowedParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<405, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function MethodNotAllowedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     405,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function MethodNotAllowedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     405,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function MethodNotAllowedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    405,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return MethodNotAllowedParameter({message, headers, body}) as Response as Response<
        405,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
