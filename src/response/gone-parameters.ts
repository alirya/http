import Response from "./response";
import GoneParameter from "./gone-parameter";
//
// /**
//  * standard message
//  */
// export default function GoneParameters() : Response<410, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function GoneParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<410, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function GoneParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     410,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function GoneParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     410,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function GoneParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    410,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return GoneParameter({message, headers, body}) as Response as Response<
        410,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
