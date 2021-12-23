import Response from "./response";
import GatewayTimeoutParameter from "./gateway-timeout-parameter";
//
// /**
//  * standard message
//  */
// export default function GatewayTimeoutParameters() : Response<504, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function GatewayTimeoutParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<504, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function GatewayTimeoutParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     504,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function GatewayTimeoutParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     504,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function GatewayTimeoutParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    504,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return GatewayTimeoutParameter({message, headers, body}) as Response as Response<
        504,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
