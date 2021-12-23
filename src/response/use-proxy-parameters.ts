import Response from "./response";
import UseProxyParameter from "./use-proxy-parameter";
//
// /**
//  * standard message
//  */
// export default function UseProxyParameters() : Response<305, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function UseProxyParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<305, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function UseProxyParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     305,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function UseProxyParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     305,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function UseProxyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    305,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UseProxyParameter({message, headers, body}) as Response as Response<
        305,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
