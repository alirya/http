import Response from "./response";
import NetworkAuthenticationRequiredParameter from "./network-authentication-required-parameter";
//
// /**
//  * standard message
//  */
// export default function NetworkAuthenticationRequiredParameters() : Response<511, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function NetworkAuthenticationRequiredParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<511, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function NetworkAuthenticationRequiredParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     511,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function NetworkAuthenticationRequiredParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     511,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function NetworkAuthenticationRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    511,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NetworkAuthenticationRequiredParameter({message, headers, body}) as Response as Response<
        511,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
