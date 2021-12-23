import Response from "./response";
import ForbiddenParameter from "./forbidden-parameter";
//
// /**
//  * standard message
//  */
// export default function ForbiddenParameters() : Response<403, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function ForbiddenParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<403, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function ForbiddenParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     403,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function ForbiddenParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     403,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function ForbiddenParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    403,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ForbiddenParameter({message, headers, body}) as Response as Response<
        403,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
