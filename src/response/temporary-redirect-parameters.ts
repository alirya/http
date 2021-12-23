import Response from "./response";
import TemporaryRedirectParameter from "./temporary-redirect-parameter";
//
// /**
//  * standard message
//  */
// export default function TemporaryRedirectParameters() : Response<307, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function TemporaryRedirectParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<307, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function TemporaryRedirectParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     307,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function TemporaryRedirectParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     307,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function TemporaryRedirectParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    307,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return TemporaryRedirectParameter({message, headers, body}) as Response as Response<
        307,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
