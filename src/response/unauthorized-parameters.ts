import Response from "./response";
import UnauthorizedParameter from "./unauthorized-parameter";
//
// /**
//  * standard message
//  */
// export default function UnauthorizedParameters() : Response<401, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function UnauthorizedParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<401, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function UnauthorizedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     401,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function UnauthorizedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     401,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function UnauthorizedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    401,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnauthorizedParameter({message, headers, body}) as Response as Response<
        401,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
