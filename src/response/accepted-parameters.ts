import Response from "./response";
import AcceptedParameter from "./accepted-parameter";
//
// /**
//  * standard message
//  */
// export default function AcceptedParameters() : Response<202, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function AcceptedParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<202, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function AcceptedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     202,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function AcceptedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     202,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function AcceptedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    202,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return AcceptedParameter({message, headers, body}) as Response as Response<
        202,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
